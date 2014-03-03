var conn = require('./db').conn;

function Crawler(c) {
    this.name = c.name;
    this.full_path = c.full_path;
    this.target_crm_id = c.target_crm_id;
    this.target_type = c.target_type; // market or submarket or comoodity
};

Crawler.prototype.save = function(callback) {
    // body...
};