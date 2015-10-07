'use strict';

/**
 * Terms Controller
 */

module.exports.controller = function (app) {

  /**
   * GET /about
   * View site about page
   */

  app.get('/about', function (req, res) {
    res.render('about/about', {
      url: req.url
    });
  });

};
