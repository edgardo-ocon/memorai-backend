// routes/memoryRoutes.js
const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');

router.post('/create', memoryController.createMemory);
router.get('/:id', memoryController.getMemory);
router.get('/', memoryController.getAllMemories);

module.exports = router;
