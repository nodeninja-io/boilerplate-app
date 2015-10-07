'use strict';

/**
* Module Dependences
*/
var Team          = require('../models/Team');
var passportConf  = require('../config/passport');

/**
* Team Controller
*/

module.exports.controller = function (app) {

  /**
  * GET /teamlist
  * JSON team api
  */

  app.get('/teamlist', passportConf.isAuthenticated, passportConf.isAdministrator, function (req, res) {
    Team.find({}, function (err, items) {
      if (err) {
        return (err, null);
      }
      res.json(items);
    });
  });

  /**
  * GET /teams
  * View site team page
  */

  app.get('/teams', function (req, res) {
    res.render('teams/teams', {
      url: req.url
    });
  });
};
