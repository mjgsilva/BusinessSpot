'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PublicTendersSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: { type: Schema.ObjectId, ref: 'Company' },
  tags: {
    type: [String]
  },
  description: {
    type: String,
    required: true
  },
  address: {
    street: String,
    zipcode: String,
    region: String,
    city: String
  },
  country: {
    type: String //ISO 3166-1 - Alpha-3, ex: PRT (http://en.wikipedia.org/wiki/ISO_3166-1)
  },
  remote: {
    type: Boolean
  },
  files: {
    type: [String],
    required: false
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
  changePhase: {
    type: Date,
    default: Date.now,
    required: false
  },
  finishing: {
    type: Date,
    required: false
  },
  //Demo porpuse
  locked: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('PublicTenders', PublicTendersSchema);
