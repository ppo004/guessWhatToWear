const express = require('express');
const app = express();

const wardrobeRoutes = require('./routes/wardrobeRoutes');

app.use(express.json());

app.use('/api/wardrobe', wardrobeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
