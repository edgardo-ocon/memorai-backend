// models/Memory.js
const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  prompt: { type: String, required: true },
  story: { type: String },
  imageURL: { type: String },
  audioURL: { type: String },
  videoURL: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', memorySchema);
