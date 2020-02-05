/* importando mo mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
  console.log('Entrou na função de conexão')
  var db = new mongo.Db(
      'twitter_db',
      new mongo.Server(
          'cluster0-xle1u.gcp.mongodb.net/test?retryWrites=true&w=majority',
          27017,
          {}
      ),
      {}
  );
  return db;
}

module.exports = function() {
  return connMongoDB;
}