const WardrobeRepository = require('../repositories/memoryWardrobeRepository');

const wardrobeRepository = new WardrobeRepository();

// Add a new clothing item to the user's wardrobe
async function addItem(req, res) {
  const clothingItem = req.body;

  try {
    // You can retrieve the authenticated user's ID from the session or token
    const userId = req.user.id; // Assuming you have a user object in the request

    await wardrobeRepository.addItem(userId, clothingItem);
    res.status(201).json({ message: 'Clothing item added to wardrobe' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update an existing clothing item in the user's wardrobe
async function updateItem(req, res) {
  const { itemId } = req.params;
  const updatedItem = req.body;

  try {
    const userId = req.user.id;

    await wardrobeRepository.updateItem(userId, itemId, updatedItem);
    res.json({ message: 'Clothing item updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Remove a clothing item from the user's wardrobe
async function removeItem(req, res) {
  const { itemId } = req.params;

  try {
    const userId = req.user.id;

    await wardrobeRepository.removeItem(userId, itemId);
    res.json({ message: 'Clothing item removed from wardrobe' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Retrieve the user's entire wardrobe
async function getAllItems(req, res) {
  try {
    const wardrobe = await wardrobeRepository.getAllItems();
    res.json(wardrobe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Retrieve a specific clothing item from the user's wardrobe
async function getItemById(req, res) {
  const { itemId } = req.params;

  try {
    const userId = req.user.id;

    const item = await wardrobeRepository.getItemById(userId, itemId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Clothing item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  addItem,
  updateItem,
  removeItem,
  getAllItems,
  getItemById,
};
