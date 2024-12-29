const express = require('express');
const connectDB = require('./db');
const app = express();
connectDB();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});