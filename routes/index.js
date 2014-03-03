/**/

module.exports = function(req, res){
	
	var conn = require('../models/db').conn;
	var page_data = {
		title : '价格自动采编',
		markets : null, 
		submarkets : null,
		commodities: null
	};

	conn.collection('markets').find({}, {sort : [['crm_id', 1]]}).toArray(function(err, results){
		if(err){
			console.log(err);
		}else{
			page_data.markets = results;
		}
		res.render('index', page_data);
	});

};