/* importando mo mongodb */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://twitter_db_user:rUWEOMxA9jEqA0KQ@cluster0-xle1u.gcp.mongodb.net/test?retryWrites=true&w=majority"

var mongoClient = {
  insertAll: function(all) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("twitter_db");
  
      dbo.collection("tweets").insertMany(all, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        dbo.collection("tweets").findOne({}, function(err, result){
          console.log(result);
        
          db.close(); 
        })
      }); 
    });
  },
  selectAll: function () {

  }
}
module.exports = mongoClient;