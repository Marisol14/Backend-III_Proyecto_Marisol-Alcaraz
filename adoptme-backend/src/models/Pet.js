const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  adopted: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

module.exports = mongoose.model('Pet', petSchema);
