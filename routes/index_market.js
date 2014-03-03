/*
 */

module.exports = function(req, res) {

    var conn = require('../models/db').conn;
    var async = require('async');
    var page_data = {
        title: '价格自动采编',
        markets: null,
        submarkets: null,
        commodities: null,
        current_market: null,
        current_submarket: null
    };

    var market_id = Number(req.params.id);
    console.log(market_id);

    if (isNaN(market_id)) {
        res.render('index', page_data);
    } else {
        async.series([

            function(callback) {
                conn.collection('markets').find({}, {
                    sort: [
                        ['crm_id', 1]
                    ]
                }).toArray(function(err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        page_data.markets = results;
                    }
                    callback();
                });
            },

            function(callback) {
                conn.collection('markets').findOne({
                    crm_id: market_id
                }, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        current_market = result;
                    }
                    callback();
                });
            },

            function(callback) {
                conn.collection('submarkets').find({
                    market_crm_id: market_id
                }).toArray(function(err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        page_data.submarkets = results;
                    }
                    callback();
                });
            }
        ], function(err) {
            if (err) {
                console.log(err);
            }
            res.render('index', page_data);
        });
    }
};