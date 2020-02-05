module.exports = function(application){
	application.get('/tables', function(req, res){
		res.render('tables');
	});
}