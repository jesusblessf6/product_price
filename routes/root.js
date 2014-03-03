
/*
 * GET home page.
 */

 module.exports = function(app){

	var index_handle = require('./index');
	var index_market_handle = require('./index_market');
	var index_submarket_handle = require('./index_submarket');

	app.get('/', index_handle);

	app.get('/market/:id', index_market_handle);

	app.get('/submarket/:id', index_submarket_handle);

};