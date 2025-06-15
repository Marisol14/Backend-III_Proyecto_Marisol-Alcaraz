const { Router } = require('express');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ajusta el path según tu estructura
const Pet = require('../models/Pet');   // Ajusta el path según tu estructura

const router = Router();

// Helper para encriptar la contraseña
const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// GET /api/mocks/mockingusers
router.get('/mockingusers', async (req, res) => {
  const users = [];
  const hashed = await encryptPassword("coder123");
  for (let i = 0; i < 50; i++) {
    users.push({
      username: faker.internet.userName(),
      password: hashed,
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: []
    });
  }
  res.json(users);
});

// GET /api/mocks/mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push({
      name: faker.person.firstName(),   // Genera un nombre de persona para la mascota
      type: faker.animal.type(),        // Tipo de animal
      age: faker.number.int({ min: 1, max: 15 }) // Edad aleatoria entre 1 y 15
    });
  }
  res.json(pets);
});


// POST /api/mocks/generateData
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;
    const hashed = await encryptPassword("coder123");

    // Crear usuarios
    let usersArr = [];
    for (let i = 0; i < users; i++) {
      usersArr.push({
        username: faker.internet.userName(),
        password: hashed,
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: []
      });
    }
    const createdUsers = await User.insertMany(usersArr);

    // Crear mascotas
    let petsArr = [];
    for (let i = 0; i < pets; i++) {
      petsArr.push({
        name: faker.person.firstName(),
        type: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 15 }),
        adopted: false,
        owner: null
      });
    }
    const createdPets = await Pet.insertMany(petsArr);

    res.json({
      users: createdUsers.length,
      pets: createdPets.length,
      message: "Datos generados e insertados en la base de datos"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
