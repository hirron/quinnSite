var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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

var uri = "mongodb://quinn:2018@goals-shard-00-00-9yjnu.mongodb.net:27017,goals-shard-00-01-9yjnu.mongodb.net:27017,goals-shard-00-02-9yjnu.mongodb.net:27017/test?ssl=true&replicaSet=goals-shard-0&authSource=admin&retryWrites=true";


router.get('/goals', function(req, res, next) {
   const collection;
   var message = "success";
  MongoClient.connect(uri, function(err, client) {

  if(err) {
         console.log(err);
         message = "fail"
     }
     message = client.db("goals").collection("nextYear");

     message = "made it to client close";
     client.close();
  });
   res.status(200).send(message);
});

router.post('/goals', function(req, res, next) {
  MongoClient.connect(uri, function(err, client) {
     client.db("goals").collection("nextYear").insertOne({
            goal: req.param('message')
     });

     client.close();
  });
  res.status(200).send("this worked");
});



module.exports = router;
