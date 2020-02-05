module.exports = function(application){
	application.get('/login', function(req, res){
		res.render('login');
	});
}