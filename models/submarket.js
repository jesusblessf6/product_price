var conn = require('./db').conn;

function Submarket(sm){
	this.name = sm.name;
	this.crm_id = sm.crm_id;
	this.market_crm_id = sm.market_crm_id;
	this.crawler_name = sm.crawler_name;
	this.last_updated = sm.last_updated;
};

module.exports = Submarket;

Submarket.prototype.save = function(callback){
	
};