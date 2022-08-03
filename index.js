const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Sloths🦥!');
})

app.listen(port, () => {
  console.log(`Sloth 🦥 listening on port ${port}`);
})