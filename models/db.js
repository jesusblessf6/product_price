var db_path = "mongodb://172.20.67.107:27017/product_price";
//var db_path = "mongodb://localhost:27017/baby_tissue";
//var db_path = "localhost:27017/taobao_DA";
exports.db_path = db_path;

var db = require('mongoskin').db(db_path, {w : 0}); 
exports.conn = db;