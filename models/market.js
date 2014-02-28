var conn = require('./db').conn;

function Market(m){
	this.name = m.name;
	this.crm_id = m.crm_id;
};

module.exports = Market;

Market.prototype.save = function(callback){
	var m = {
		name : this.name,
		crm_id : this.crm_id
	};

	conn.collection('markets').count({$or : [{name : m.name}, {crm_id : m.crm_id}]}, function(err, c){
		if(err){
			return callback(err);
		}

		if(c > 0){
			return callback("The market has already existed");
		}

		conn.collection('markets').insert(m, function(err, result){
			if(err){
				return callback(err);
			}
			callback(null, result);
		});
	});
};

Market.update = function(m, callback){
	conn.collection('markets').count({_id : m._id}, function(err, c){
		if(err){
			return callback(err);
		}

		if(c == 0){
			return callback("Could not find the market");
		}

		conn.collection('markets').update({_id : m._id}, {$set : {name : m.name, crm_id : m.crm_id}}, function(err, result){
			if(err){
				return callback(err);
			}
			callback(result);
		});
	});
};