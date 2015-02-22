'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');

var Submissions = require('../submissions/submissions.model');

// Get a single lastsubmission
exports.show = function(req, res) {
  Submissions.find( { publicTender: mongoose.Types.ObjectId(req.params.id), last: true } ).populate('publicTender, user').exec(function (err, submissions) {
    if(err) { return handleError(res, err); }
    if(!submissions) { return res.send(404); }
    return res.json(submissions);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}