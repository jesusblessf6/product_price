var conn = require('./db').conn;

function Price(p) {
    this.commodity_crm_id = p.commodity_crm_id;
    this.price_time = p.price_time;
    this.price = p.price;
    this.field_0 = p.field_0;
    this.field_1 = p.field_1;
    this.field_2 = p.field_2;
    this.field_3 = p.field_3;
    this.field_4 = p.field_4;
    this.field_5 = p.field_5;
    this.field_6 = p.field_6;
    this.field_7 = p.field_7;
    this.field_8 = p.field_8;
    this.field_9 = p.field_9;
    this.comment = p.comment;
    this.highest = p.highest;
    this.lowest = p.lowest;
    this.delta = p.delta;
};

module.exports = Price;

Price.prototype.save = function(callback) {
    // body...
};