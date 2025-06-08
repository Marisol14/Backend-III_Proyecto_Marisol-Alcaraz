require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const petsRouter = require('./routes/pets.router');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err));

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/', (req, res) => res.send('AdoptMe API Running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
