'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Player Schema
 */
var PlayerSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Validations
 */
PlayerSchema.path('first_name').validate(function(name) {
  return !!name;
}, 'First name cannot be blank');

PlayerSchema.path('last_name').validate(function(content) {
  return !!content;
}, 'Last name cannot be blank');

/**
 * Statics
 */
PlayerSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Player', PlayerSchema);
