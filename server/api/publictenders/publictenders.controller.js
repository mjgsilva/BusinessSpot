'use strict';

var _ = require('lodash');
var Publictenders = require('./publictenders.model');

// Get list of publictenderss
exports.index = function(req, res) {
  Publictenders.find(function (err, publictenderss) {
    if(err) { return handleError(res, err); }
    return res.json(200, publictenderss);
  });
};

// Get a single publictenders
exports.show = function(req, res) {
  Publictenders.findById(req.params.id, function (err, publictenders) {
    if(err) { return handleError(res, err); }
    if(!publictenders) { return res.send(404); }
    return res.json(publictenders);
  });
};

// Creates a new publictenders in the DB.
exports.create = function(req, res) {
  Publictenders.create(req.body, function(err, publictenders) {
    if(err) { return handleError(res, err); }
    return res.json(201, publictenders);
  });
};

// Updates an existing publictenders in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Publictenders.findById(req.params.id, function (err, publictenders) {
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
  Publictenders.findById(req.params.id, function (err, publictenders) {
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