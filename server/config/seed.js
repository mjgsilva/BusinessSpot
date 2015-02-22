/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Company = require('../api/company/company.model');
var PublicTenders = require('../api/publictenders/publictenders.model');
var Submissions = require('../api/submissions/submissions.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Submissions.find({}).remove(function() {
  console.log('Submissions deleted');
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Ricardo Pereira',
    email: 'r@b.s',
    password: 'babes'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Mário Silva',
    email: 'mjgs.biz@gmail.com',
    password: 'babes'
  }, {
    provider: 'local',
    role: 'user',
    name: 'WIT',
    email: 'wit@shiftappens.com',
    password: 'wit'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Blip',
    email: 'blip@shiftappens.com',
    password: 'blip'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Flag',
    email: 'flag@shiftappens.com',
    password: 'flag'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Group Buddies',
    email: 'groupbuddies@shiftappens.com',
    password: 'groupbuddies'
  }, {
    provider: 'local',
    role: 'user',
    name: 'iTGrow',
    email: 'itgrow@shiftappens.com',
    password: 'itgrow'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Whitesmith',
    email: 'whitesmith@shiftappens.com',
    password: 'whitesmith'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Lunacloud',
    email: 'lunacloud@shiftappens.com',
    password: 'lunacloud'
  }, {
    provider: 'local',
    role: 'user',
    name: 'JOBBOX',
    email: 'jobbox@shiftappens.com',
    password: 'jobbox'
  }, {
    provider: 'local',
    role: 'user',
    name: 'ISA - Intelligent Sensing Anywhere',
    email: 'isa@shiftappens.com',
    password: 'isa'
  }, {
    provider: 'local',
    role: 'user',
    name: 'RedLight Software',
    email: 'redlight@shiftappens.com',
    password: 'redlight'
  }, function() {

      User.findOne({ name: 'WIT', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'WIT',
            kind: 2, //Tenderer
            taxNumber: 'PT547253647',
            address: {
              street: 'Centro de Empresas de Taveiro',
              zipcode: '3045-508',
              region: 'Taveiro',
              city: 'Coimbra'
            },
            country: 'PRT',
            contact: '+351 239 801 030',
            social: {
              twitter: 'WIT_Software',
              linkedin: 'wit-software'
            },
            website: 'wit.pt',
            ranking: 343
          }, function() {

          })
        })
      })

      User.findOne({ name: 'Blip', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'Blip',
            kind: 2, //Tenderer
            taxNumber: 'PT535462738',
            address: {
              street: 'Rua Heróis e Mártires de Angola, nº 59 4º',
              zipcode: '4000-285',
              region: 'Porto',
              city: 'Porto'
            },
            country: 'PRT',
            contact: '+351 222 083 224',
            social: {
              twitter: 'blip_pt'
            },
            website: 'blip.pt',
            ranking: 120
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'Flag', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'Flag',
            kind: 2, //Tenderer
            taxNumber: 'PT547384753',
            address: {
              street: 'Avenida Emídio Navarro, nº 81, 1º A',
              zipcode: '3000-151',
              region: 'Coimbra',
              city: 'Coimbra'
            },
            country: 'PRT',
            contact: '+351 239 724 500',
            website: 'flag.pt',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'Group Buddies', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'Group Buddies',
            kind: 2, //Tenderer
            taxNumber: 'PT599872333',
            address: {
              street: '',
              zipcode: '',
              region: '',
              city: 'Braga'
            },
            country: 'PRT',
            contact: '+351 916 748 994',
            social: {
              twitter: 'groupbuddies'
            },
            website: 'groupbuddies.com',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'iTGrow', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'iTGrow',
            kind: 2, //Tenderer
            taxNumber: 'PT567334483',
            address: {
              street: 'Parque Industrial de Taveiro, Lote 48',
              zipcode: '3045-504',
              region: 'Taveiro',
              city: 'Coimbra'
            },
            country: 'PRT',
            website: 'itgrow.pt',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'Whitesmith', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'Whitesmith',
            kind: 3, //Worker & Tenderer
            taxNumber: 'PT571633324',
            address: {
              street: 'Rua Pedro Nunes',
              zipcode: '3030-199',
              region: 'Coimbra',
              city: 'Coimbra'
            },
            country: 'PRT',
            contact: '+351',
            social: {
              twitter: 'Whitesmithco'
            },
            website: 'whitesmith.co',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'Lunacloud', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'Lunacloud',
            kind: 3, //Worker & Tenderer
            taxNumber: 'PT513148573',
            country: 'PRT',
            website: 'lunacloud.com',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'JOBBOX', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'JOBBOX',
            kind: 3, //Worker & Tenderer
            taxNumber: 'PT542847444',
            address: {
              street: 'Rua da Prata, 81, 2 E',
              zipcode: '1100-414',
              region: 'Lisbon',
              city: 'Lisbon'
            },
            country: 'PRT',
            contact: '+351 211 378 367',
            social: {
              twitter: ''
            },
            ranking: 0
          }, function() {

            Company.findOne({ taxNumber: 'PT542847444' }).select('_id').exec(function (err, company) {
              PublicTenders.find({}).remove(function() {
                // Public Tenders
                PublicTenders.create({
                  title: 'Mobile App',
                  company: company._id,
                  tags: ['Mobile'],
                  description: 'Android and iOS app for JOBBOX.',
                  country: 'PRT',
                  remote: true,
                  budget: 120.000,
                  phase: 1,
                  locked: true
                }, function() {
                  console.log('finished populating Public Tenders');
                })
              })
            })

          })
        })
      })

      User.findOne({ name: 'ISA - Intelligent Sensing Anywhere', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'ISA - Intelligent Sensing Anywhere',
            kind: 2, //Tenderer
            taxNumber: 'PT598677754',
            address: {
              street: 'Rua Pedro Nunes',
              zipcode: '3030-199',
              region: 'Coimbra',
              city: 'Coimbra'
            },
            country: 'PRT',
            contact: '+351 239 791 090',
            website: 'isasensing.com',
            ranking: 0
          }, function() {

            // Public Tenders

            // Submissions

          })
        })
      })

      User.findOne({ name: 'RedLight Software', role: 'user' }).select('_id').exec(function (err, user) {
        Company.find({}).remove(function() {
          // Companies
          Company.create({
            user: user._id,
            name: 'RedLight Software',
            kind: 3, //Worker & Tenderer
            taxNumber: 'PT518227333',
            address: {
              street: 'Emídio Navarro Str. 81, 2-B',
              zipcode: '3000-150',
              region: 'Coimbra',
              city: 'Coimbra'
            },
            country: 'PRT',
            contact: '+351 239 820 259',
            website: 'weareredlight.com',
            ranking: 0
          }, function() {

            Company.findOne({ taxNumber: 'PT518227333' }).select('_id').exec(function (err, company) {
              PublicTenders.find({}).remove(function() {
                // Public Tenders
                PublicTenders.create({
                  title: 'ShiftAPPens Bank Platform',
                  company: company._id,
                  tags: ['Web', 'Security'],
                  description: 'The new coin need a home.',
                  country: 'PRT',
                  remote: false,
                  budget: 560000,
                  phase: 1,
                  locked: false
                }, {
                  title: 'ShiftAPPens Rocket Launcher',
                  company: company._id,
                  tags: ['Space'],
                  description: 'A rocket launcher is any device that launches a rocket-propelled projectile, although the term is often used in reference to mechanisms that are portable and capable of being operated by an individual.',
                  country: 'PRT',
                  remote: false,
                  budget: 2330000,
                  phase: 1,
                  locked: false
                }, {
                  title: 'ShiftAPPens Website Update',
                  company: company._id,
                  tags: ['Web'],
                  description: 'A website, also written as web site, or simply site, is a set of related web pages typically served from a single web domain.',
                  country: 'PRT',
                  remote: true,
                  budget: 2000,
                  phase: 1,
                  locked: true
                }, function() {
                  console.log('finished populating Public Tenders');
                })
              })
            })

          })
        })
      })

      console.log('finished populating users');
    }
  );
});
