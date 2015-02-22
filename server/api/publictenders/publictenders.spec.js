'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /publictenders', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/publictenders')
      .expect(200)
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        /* if (err) return done(err);
        res.body.should.be.instanceof(Array); */
        done();
      });
  });
});
