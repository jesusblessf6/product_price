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
    var market_crm_id = null;

    var submarket_id = Number(req.params.id);
    console.log(submarket_id);

    if (isNaN(submarket_id)) {
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
                conn.collection('submarkets').findOne({
                    crm_id: submarket_id
                }, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        market_crm_id = result.market_crm_id;
                        current_submarket = result;
                    }
                    callback();
                });
            },

            function(callback) {
                conn.collection('markets').findOne({
                    crm_id: market_crm_id
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
                if (market_crm_id) {
                    conn.collection('submarkets').find({
                        market_crm_id: market_crm_id
                    }).toArray(function(err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            page_data.submarkets = results;
                        }
                        callback();
                    });
                } else {
                    callback();
                }
            },

            function(callback) {
                conn.collection('commodities').find({
                    submarket_crm_id: submarket_id
                }).toArray(function(err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        page_data.commodities = results;
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