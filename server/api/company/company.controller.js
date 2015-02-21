'use strict';

var _ = require('lodash');
var Company = require('./company.model');

// Get list of companys
exports.index = function(req, res) {
  Company.find(function (err, companys) {
    if(err) { return handleError(res, err); }
    return res.json(200, companys);
  });
};

// Get a single company
exports.show = function(req, res) {
  Company.findById(req.params.id, function (err, company) {
    if(err) { return handleError(res, err); }
    if(!company) { return res.send(404); }
    return res.json(company);
  });
};

// Creates a new company in the DB.
exports.create = function(req, res) {
  Company.create(req.body, function(err, company) {
    if(err) { return handleError(res, err); }
    return res.json(201, company);
  });
};

// Updates an existing company in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Company.findById(req.params.id, function (err, company) {
    if (err) { return handleError(res, err); }
    if(!company) { return res.send(404); }
    var updated = _.merge(company, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, company);
    });
  });
};

// Deletes a company from the DB.
exports.destroy = function(req, res) {
  Company.findById(req.params.id, function (err, company) {
    if(err) { return handleError(res, err); }
    if(!company) { return res.send(404); }
    company.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}