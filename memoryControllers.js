// controllers/memoryController.js
const Memory = require('../models/Memory');
const gptService = require('../services/gptService');
const imageService = require('../services/imageService');
const voiceService = require('../services/voiceService');
const videoService = require('../services/videoService');

exports.createMemory = async (req, res) => {
  const { userId, prompt } = req.body;
  try {
    const story = await gptService.generateStory(prompt);
    const imageURL = await imageService.generateImage(prompt);
    const audioURL = await voiceService.generateVoice(story);
    const videoURL = await videoService.combineAssets(imageURL, audioURL);

    const newMemory = new Memory({
      user: userId,
      prompt,
      story,
      imageURL,
      audioURL,
      videoURL
    });

    await newMemory.save();
    res.status(201).json(newMemory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) return res.status(404).json({ message: 'Recuerdo no encontrado' });
    res.json(memory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMemories = async (req, res) => {
  try {
    const memories = await Memory.find().sort({ createdAt: -1 });
    res.json(memories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
