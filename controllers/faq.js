'use strict';

/**
 * FAQs Controller
 */

module.exports.controller = function (app) {

  /**
   * GET /faq
   * View site FAQs page
   */

  app.get('/faq', function (req, res) {
    res.render('faq/faq', {
      url: req.url
    });
  });

};
