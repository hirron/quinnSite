var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Dad', function(req, res, next) {
  res.render('index', { title: 'Dad' });
});

router.get('/Dee', function(req, res, next) {
  res.render('index', { title: 'Dee' });
});

router.get('/Sam', function(req, res, next) {
  res.render('index', { title: 'Sam' });
});

router.get('/Grandma', function(req, res, next) {
  res.render('index', { title: 'Grandma' });
});

module.exports = router;
