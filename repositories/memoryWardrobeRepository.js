const WardrobeRepository = require('./wardrobeRepository');
class MemoryWardrobeRepository extends WardrobeRepository {
  constructor() {
    super();
    this.wardrobeData = {}; 
  }

  async addItem(userId, clothingItem) {
    if (!this.wardrobeData[userId]) {
      this.wardrobeData[userId] = [];
    }
    this.wardrobeData[userId].push(clothingItem);
  }

  async updateItem(userId, itemId, updatedItem) {
    const userWardrobe = this.wardrobeData[userId];
    if (userWardrobe) {
      const index = userWardrobe.findIndex(item => item.id === itemId);
      if (index !== -1) {
        userWardrobe[index] = { ...userWardrobe[index], ...updatedItem };
      }
    }
  }

  async removeItem(userId, itemId) {
    const userWardrobe = this.wardrobeData[userId];
    if (userWardrobe) {
      this.wardrobeData[userId] = userWardrobe.filter(item => item.id !== itemId);
    }
  }

  async getAllItems() {
    return this.wardrobeData;
  }

  async getItemById(userId, itemId) {
    const userWardrobe = this.wardrobeData[userId];
    if (userWardrobe) {
      return userWardrobe.find(item => item.id === itemId);
    }
    return null;
  }
}

module.exports = MemoryWardrobeRepository;
