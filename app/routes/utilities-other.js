module.exports = function(application){
	application.get('/utilities-other', function(req, res){
		res.render('utilities-other');
	});
}