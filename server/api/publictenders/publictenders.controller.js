'use strict';

var _ = require('lodash');
var PublicTenders = require('./publictenders.model');
var Company = require('../company/company.model');

// Get list of publictenders
exports.index = function(req, res) {
  PublicTenders.find({}).populate('company').exec(function (err, publictenders) {
    if(err) { return handleError(res, err); }
    return res.json(200, publictenders);
  });
};

// Get a single publictenders
exports.show = function(req, res) {
  PublicTenders.findById(req.params.id).populate('company').exec(function (err, publictenders) {
    if(err) { return handleError(res, err); }
    if(!publictenders) { return res.send(404); }
    return res.json(publictenders);
  });
};

// Creates a new publictenders in the DB.
exports.create = function(req, res) {
  PublicTenders.create(req.body, function(err, publictenders) {
    if(err) { return handleError(res, err); }
    return res.json(201, publictenders);
  });
};

// Updates an existing publictenders in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PublicTenders.findById(req.params.id, function (err, publictenders) {
    if (err) { return handleError(res, err); }
    if(!publictenders) { return res.send(404); }
    var updated = _.merge(publictenders, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, publictenders);
    });
  });
};

// Deletes a publictenders from the DB.
exports.destroy = function(req, res) {
  PublicTenders.findById(req.params.id, function (err, publictenders) {
    if(err) { return handleError(res, err); }
    if(!publictenders) { return res.send(404); }
    publictenders.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}