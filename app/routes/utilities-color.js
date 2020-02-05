module.exports = function(application){
	application.get('/utilities-color', function(req, res){
		res.render('utilities-color');
	});
}