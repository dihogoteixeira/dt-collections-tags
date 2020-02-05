module.exports = function(application){
	application.get('/charts', function(req, res){
		res.render('charts');
	});
}