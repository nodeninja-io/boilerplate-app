'use strict';

/**
 * Module Dependencies
 */

var mongoose  = require('mongoose');

/**
 * Define Teams Schema
 */

var teamSchema = new mongoose.Schema({
  name: { type: String, default: '' }
});

/**
 * Export Model
 */

module.exports = mongoose.model('Team', teamSchema);
