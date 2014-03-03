/*
*/

module.exports = function(req, res){
	var page_data = {
		title : '价格自动采编',
		markets : null,
		submarkets : null,
		commodities: null
	};
	res.render('index', {title : '首页'});
};