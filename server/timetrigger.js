
'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Company = require('./api/company/company.model.js');
var PublicTenders = require('./api/publictenders/publictenders.model');
var Submissions = require('./api/submissions/submissions.model');



var Agenda = require('agenda');

var agenda = new Agenda({db: { address: 'localhost:27017/businessspot-dev' }});

agenda.define('PhaseChecker', function(job, done) {

  PublicTenders.find({ $and: [ { "changePhase": { "$lt": new Date() } }, { phase: "1" }] }, function (err, tenders) {
    if(!err) {
      tenders.forEach(function(tender) {
        PublicTenders.findByIdAndUpdate(tender._id , {"$set": { phase: "2" } }, function (err, tender) {
          if(!err && tender.length > 0) {
            Submissions.find({ $and: [ { publicTender: mongoose.Types.ObjectId(tender._id) }, { last: true } ] }).sort({money: 'asc'}).exec(function(err, submissions) {
              mailHandler(tender, submissions);
            });

            console.log("Phase 2:" + tender.title);
          }
        });
      });
    }
  });

  done();

});

agenda.every('2 minutes', 'PhaseChecker');

agenda.start();

function mailHandler(tender, submissions) {
  var msgFirst = "You are leading! Although, make sure this is the best deal that you can offer!";
  var msgNotFirst = "You deal is not the best one, so we suggest that you try to offer a better deal!";
  var first = true;

  submissions.forEach(function(submission) {
    if(first) {
      sendMail(submission.user.email,tender.description,msgFirst);
      first = false;
    } else {
      sendMail(submission.user.email,tender.description,msgNotFirst);
    }
  });



}

function sendMail(mail, subj, body) {
     var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
         user: 'business.spot.eq@gmail.com',
         pass: 's3gundaénoIPN'
       }
     });

    var mailOptions = {
      from: 'Business Spot',
      to: mail,
      subject: subj,
      text: body
    };

  transporter.sendMail(mailOptions, function(err, info){
    if(err) { console.log(err); }
    else { info.response; }
  })
}

function graceful() {
  agenda.stop(function() {
    process.exit(0);
  });
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);
