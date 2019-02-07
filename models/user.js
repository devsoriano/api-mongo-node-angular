'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('User', 
  Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    role: String,
    image: String
  })
)