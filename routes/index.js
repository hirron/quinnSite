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

var uri = "mongodb+srv://quinn:2018@goals-9yjnu.mongodb.net/test?retryWrites=true"

router.get('/goals', function(req, res, next) {

  MongoClient.connect(uri,  { useNewUrlParser: true }, (err, client) => {
   var message = "made it to connect";
  if(err) {
         console.log(err);
         message = "fail"
         res.status(404).send(err);
     }

     client.db("goals").collection("nextYear").find().toArray(function(err, docs) {
       console.log(err);
       console.log(docs);
        message = docs[1];
        res.status(200).send(message);
      });
  //   message = JSON.stringify(client.db("goals").collection("nextYear").find());


     res.status(200).send(message);
     client.close();
  });

});

router.post('/goals', function(req, res, next) {
  MongoClient.connect(uri, (err, client) => {

    if(err) {
           console.log(err);
           message = "fail"
           res.status(404).send(err);
       }

     client.db("goals").collection("nextYear").insertOne({
            goal: req.param('message')
     });

     client.close();
  });
  res.status(200).send("this worked");
});



module.exports = router;
