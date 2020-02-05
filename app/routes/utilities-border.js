module.exports = function(application){
	application.get('/utilities-border', function(req, res){
		res.render('utilities-border');
	});
}