const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello, CI/CD Pipeline!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for tests