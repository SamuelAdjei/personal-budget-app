const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.get('/', (req, res) => {
  console.log(`Endpoint running`);
});

const pot = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
module.exports = app;
