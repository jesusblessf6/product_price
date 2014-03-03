var conn = require('./db').conn;

function Price(p){
	this.commodity_crm_id = c.commodity_crm_id;
	this.price_time = c.price_time;
	this.price = c.price;
	this.field_0 = c.field_0;
	this.field_1 = c.field_1;
	this.field_2 = c.field_2;
	this.field_3 = c.field_3;
	this.field_4 = c.field_4;
	this.field_5 = c.field_5;
	this.field_6 = c.field_6;
	this.field_7 = c.field_7;
	this.field_8 = c.field_8;
	this.field_9 = c.field_9;
};

module.exports = Price;

Price.prototype.save = function(callback) {
	// body...
};