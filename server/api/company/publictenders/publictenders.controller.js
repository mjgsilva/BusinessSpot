'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');

var PublicTenders = require('../../publictenders/publictenders.model');

// Get PublicTenders by Company
exports.show = function(req, res) {
  PublicTenders.find({ company: mongoose.Types.ObjectId(req.params.id) }).populate('company').exec(function (err, company) {
    if(err) { return handleError(res, err); }
    if(!company) { return res.send(404); }
    return res.json(company);
  });
};