module.exports = function(application){
	application.get('/register', function(req, res){
		res.render('register');
	});
}