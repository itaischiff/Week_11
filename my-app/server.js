const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// Serve static files from the 'public/build' directory
app.use(express.static(path.join(__dirname, 'public', 'build')));

// Catch-all handler to serve the index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
