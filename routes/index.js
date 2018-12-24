var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
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
