function tweetsDAO() {
    this._tweets = process.db.get().collection('tweets')
    this._ObjectID = process.db.ObjectID()
}

tweetsDAO.prototype.pageList = function(page, qtd, cb) {
    this._tweets.find({},function(err, tweets) {

        if (err) {
            return cb(err);
        } 
        else {
            return cb(null,tweets);
        }
    })  
} 

module.exports = function() {
    return tweetsDAO
}