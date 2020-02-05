module.exports = function(application){
	application.get('/utilities-animation', function(req, res){
		res.render('utilities-animation');
	});
}