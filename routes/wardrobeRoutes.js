const express = require('express');
const router = express.Router();
const wardrobeController = require('../controllers/wardrobeController');

router.post('/', wardrobeController.addItem);

router.put('/:itemId', wardrobeController.updateItem);

router.delete('/:itemId', wardrobeController.removeItem);

router.get('/', wardrobeController.getAllItems);

router.get('/:itemId', wardrobeController.getItemById);

module.exports = router;
