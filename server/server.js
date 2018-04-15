const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Register some middleware
app.use(express.static(publicPath));

// If what the user looking for is not in the folder, just give the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log("Server is up !");
});