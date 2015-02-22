'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubmissionsSchema = new Schema({
  publicTender: { type: Schema.ObjectId, ref: 'PublicTenders' },
  user: { type: Schema.ObjectId, ref: 'User' },
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
  notes: {
    type: String,
    required: true
  },
  files: {
    type: [String]
  }
});

module.exports = mongoose.model('Submissions', SubmissionsSchema);
