'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Song', 
  Schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: {
      type: Schema.ObjectId, 
      ref: 'Album'
    }
  })
)