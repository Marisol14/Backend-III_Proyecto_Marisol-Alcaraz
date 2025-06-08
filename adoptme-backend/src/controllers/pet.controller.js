const Pet = require('../models/Pet');
const User = require('../models/User');

exports.create = async (req, res) => {
  const pet = await Pet.create(req.body);
  res.status(201).json(pet);
};

exports.getAll = async (req, res) => {
  const pets = await Pet.find().populate('owner', 'username');
  res.json(pets);
};

exports.getAvailable = async (req, res) => {
  const pets = await Pet.find({ adopted: false });
  res.json(pets);
};

exports.adopt = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet || pet.adopted) return res.status(404).json({ message: 'Mascota no disponible' });

  pet.adopted = true;
  pet.owner = req.user.id;
  await pet.save();

  await User.findByIdAndUpdate(req.user.id, { $push: { pets: pet._id } });

  res.json({ message: 'Mascota adoptada', pet });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Pet.findByIdAndDelete(id);
  res.json({ message: 'Mascota eliminada' });
};
