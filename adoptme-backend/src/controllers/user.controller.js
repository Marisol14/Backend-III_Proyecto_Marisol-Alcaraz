const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).populate('pets');
  res.json(user);
};

exports.getAll = async (req, res) => {
  const users = await User.find().populate('pets');
  res.json(users);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'Usuario eliminado' });
};
