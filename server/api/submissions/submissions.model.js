'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubmissionsSchema = new Schema({
  publicTender: {
    type: Schema.ObjectId,
    required: true
  },
  phase: {
    type: Number,
    required: true,
    default: 1
  },
  last: {
    type: Boolean,
    default: true
  },
  money: {
    type: Number,
    required: true
  },
  published: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  files: {
    type: [String]
  }
});

module.exports = mongoose.model('Submissions', SubmissionsSchema);