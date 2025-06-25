// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  memories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Memory' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
