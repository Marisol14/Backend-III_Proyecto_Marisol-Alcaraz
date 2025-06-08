const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token requerido' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
}

function admin(req, res, next) {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Solo para admin' });
  next();
}

module.exports = { auth, admin };
