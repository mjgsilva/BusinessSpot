'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');

var Submissions = require('../submissions/submissions.model');

// Get list of lastsubmissions
exports.index = function(req, res) {
  Submissions.find({}).populate('publicTender').exec(function (err, submissions) {
    if(err) { return handleError(res, err); }
    return res.json(200, lastsubmissions);
  });
};

// Get a single lastsubmission
exports.show = function(req, res) {
  Submissions.find( { publicTender: mongoose.Types.ObjectId(req.params.id), last: true } ).populate('publicTender').exec(function (err, submissions) {
    if(err) { return handleError(res, err); }
    if(!submissions) { return res.send(404); }
    return res.json(submissions);
  });
};

// Creates a new lastsubmission in the DB.
exports.create = function(req, res) {
  Submissions.create(req.body, function(err, lastsubmission) {
    if(err) { return handleError(res, err); }
    return res.json(201, lastsubmission);
  });
};

// Updates an existing lastsubmission in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Submissions.findById(req.params.id, function (err, lastsubmission) {
    if (err) { return handleError(res, err); }
    if(!lastsubmission) { return res.send(404); }
    var updated = _.merge(lastsubmission, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lastsubmission);
    });
  });
};

// Deletes a lastsubmission from the DB.
exports.destroy = function(req, res) {
  Submissions.findById(req.params.id, function (err, lastsubmission) {
    if(err) { return handleError(res, err); }
    if(!lastsubmission) { return res.send(404); }
    lastsubmission.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}