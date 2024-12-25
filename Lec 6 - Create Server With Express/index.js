const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (req, res) => {
  res.render('Home'); 
});

app.get('/Product', (req, res) => {
  res.render('Product'); 
});

app.get('/Contact', (req, res) => {
  res.render('Contact');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});