'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Album', 
  Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: {
      type: Schema.ObjectId, 
      ref: 'Artist'
    }
  })
)