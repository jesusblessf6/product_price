var conn = require('./db').conn;

function Commodity(c){
	this.name = c.name;
	this.web_token = c.wen_token;
	this.crm_id = c.crm_id;
	this.submarket_crm_id = c.submarket_crm_id;
	this.field_count = c.field_count;
	this.field_name_0 = c.field_name_0;
	this.field_name_1 = c.field_name_1;
	this.field_name_2 = c.field_name_2;
	this.field_name_3 = c.field_name_3;
	this.field_name_4 = c.field_name_4;
	this.field_name_5 = c.field_name_5;
	this.field_name_6 = c.field_name_6;
	this.field_name_7 = c.field_name_7;
	this.field_name_8 = c.field_name_8;
	this.field_name_9 = c.field_name_9;
};

module.exports = Commodity;

Commodity.prototype.save = function(callback){

};