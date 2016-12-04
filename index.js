var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();


app.use(express.static(__dirname + '/public/'));

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(require('morgan')('dev'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

// app.get('/package', function(req, res) {
//   res.render('package');
// });
//
// app.get('/site', function(req, res) {
//   res.render('site');
// });
//
// app.get('/contact', function(req, res) {
//   res.render('contact');
// });

var server = app.listen(process.env.PORT || 3000);
