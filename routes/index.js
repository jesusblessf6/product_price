
/*
 * GET home page.
 */

module.exports = function(app){
	//app.get('/', routes.index);
	app.get('/', function(req, res){
		res.render('index', {title : '首页'});
	});
};