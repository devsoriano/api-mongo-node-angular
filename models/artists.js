'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Artist', 
  Schema({
    name: String,
    description: String,
    image: String  
  })
)