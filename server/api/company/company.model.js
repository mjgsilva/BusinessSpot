'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    required: true
  },
  kind: {
    type: Number, //Enum: 1. Worker, 2. Tenderer, 3. Worker & Tenderer, 4. Recommender
    default: 1
  },
  taxNumber: {
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
    type: String, //ISO 3166-1 - Alpha-3, ex: PRT (http://en.wikipedia.org/wiki/ISO_3166-1)
    required: true
  },
  contact: {
    type: [String]    
  },
  website: {
    type: String
  },
  social: {
    facebook: String,
    twitter: String,
    linkedin: String,
    github: String
  },
  ranking: {
    type: Number
  }
});

module.exports = mongoose.model('Company', CompanySchema);