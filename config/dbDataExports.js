/* importando mo mongodb */
var MongoExports = require('mongodb').MongoExports;
var url = "mongodb+srv://twitter_db_user:rUWEOMxA9jEqA0KQ@cluster0-xle1u.gcp.mongodb.net/test?retryWrites=true&w=majority"

var MongoExports = {
  selectAll: function(all) {
    MongoExports.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("twitter_db");
  
      dbo.collection("tweets").find(all, function(err, res) {
        if (err) throw err;
        dbo.collection("tweets").findMany({}, function(err, res){
          console.log(res);
        
          db.close(); 
        })
      });    
    });
  },
}
module.exports = MongoExports;