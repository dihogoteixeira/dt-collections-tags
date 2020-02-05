module.exports = function(application){
	application.get('/forgot-password', function(req, res){
		res.render('forgot-password');
	});
}