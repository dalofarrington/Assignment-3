var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1 (/)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET movies page. */
// Removed: this route conflicted with the dedicated movies router mounted at '/movies'.
// The movies router (`server/routes/movies.js`) handles requests under '/movies'.

module.exports = router;

