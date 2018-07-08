const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.send
// });

app.listen(3000, () => {
  console.log(`Server up on port ${port}`);
})