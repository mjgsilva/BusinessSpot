'use strict';

var _ = require('lodash');
var Submissions = require('./submissions.model');

// Get list of submissions
exports.index = function(req, res) {
  Submissions.find({}).populate('publicTender').exec(function (err, submissions) {
    if(err) { return handleError(res, err); }
    return res.json(200, submissions);
  });
};

// Get a single submissions
exports.show = function(req, res) {
  Submissions.findById(req.params.id).populate('publicTender').exec(function (err, submissions) {
    if(err) { return handleError(res, err); }
    if(!submissions) { return res.send(404); }
    return res.json(submissions);
  });
};

// Creates a new submissions in the DB.
exports.create = function(req, res) {
  Submissions.create(req.body, function(err, submissions) {
    if(err) { return handleError(res, err); }
    return res.json(201, submissions);
  });
};

// Updates an existing submissions in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Submissions.findById(req.params.id, function (err, submissions) {
    if (err) { return handleError(res, err); }
    if(!submissions) { return res.send(404); }
    var updated = _.merge(submissions, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, submissions);
    });
  });
};

// Deletes a submissions from the DB.
exports.destroy = function(req, res) {
  Submissions.findById(req.params.id, function (err, submissions) {
    if(err) { return handleError(res, err); }
    if(!submissions) { return res.send(404); }
    submissions.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}