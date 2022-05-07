const express = require('express');
const hbs = require('hbs');
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//server static content
app.use(express.static('public'));

const variables = {
  title: 'imba',
};

app
  .get('/', (req, res) => {
    res.render('index', variables);
  })
  .get('/inicio', (req, res) => {
    res.render('inicio', variables);
  })
  .get('/blog', (req, res) => {
    res.render('blog', variables);
  })
  .get('/contactate', (req, res) => {
    res.render('contactate', variables);
  })
  .get('/locaciones', (req, res) => {
    res.render('locaciones', variables);
  })
  .get('/nosotros', (req, res) => {
    res.render('nosotros', variables);
  })
  .get('/productos', (req, res) => {
    res.render('productos', variables);
  })
  .get('/promociones', (req, res) => {
    res.render('promociones', variables);
  })
  .get('*', (req, res) => {
    res.render('404', variables);
  });

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
