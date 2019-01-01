var MongoClient = require('mongodb').MongoClient;
var express = require('express');



var router = express.Router();
var uri = "mongodb://quinn:2018@goals-shard-00-00-9yjnu.mongodb.net:27017,goals-shard-00-01-9yjnu.mongodb.net:27017,goals-shard-00-02-9yjnu.mongodb.net:27017/test?ssl=true&replicaSet=goals-shard-0&authSource=admin&retryWrites=true";


router.get('/goals', function(req, res, next) {
  MongoClient.connect(uri, function(err, client) {
     const collection = client.db("goals").collection("nextYear");

     client.close();
  });
});

router.post('/goals', function(req, res, next) {
  MongoClient.connect(uri, function(err, client) {
     client.db("goals").collection("nextYear").insertOne({
            goal: req.param('message')
     });

     client.close();
  });
});

module.exports = router;
