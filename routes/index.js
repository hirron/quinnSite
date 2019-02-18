var express = require('express');
var express = require('public');

var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mypage');
});


router.get('/NewYears', function(req, res, next) {
  res.render('newyears', { title: 'Dad' });
});

router.get('/download/myResume', function(req, res){
  res.render('resume')
});

router.get('/download/resume', function(req, res){
  var file = __dirname + '/upload-folder/resume.pdf';
  res.download(file); // Set disposition and send it.
});


var uri = "mongodb+srv://quinn:2018@goals-9yjnu.mongodb.net/test?retryWrites=true"

router.get('/goals', function(req, res, next) {

  MongoClient.connect(uri,  { useNewUrlParser: true }, (err, client) => {

  if(err) {
         console.log(err);
         message = "fail"
         res.status(404).send(err);
     }

     client.db("goals").collection("nextYear").find().toArray(function(err, docs) {
       console.log(err);
       console.log(docs);
       console.log("----\n" + console.log(docs[1]));
        res.status(200).send(docs);
      });
  //   message = JSON.stringify(client.db("goals").collection("nextYear").find());
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
