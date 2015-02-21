'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PublictendersSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  entity: {
    type: ObjectId,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address : {
    type: String
  },
  remote: {
    type: Boolean,
    required: true
  },
  conditions: {
    type: [String],
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  phase: {
    type: Number,
    required: true,
    default: 1
  },
  published: {
    type: Date,
    required: true,
    default: Date.now
  },
  finishing: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Publictenders', PublictendersSchema);
