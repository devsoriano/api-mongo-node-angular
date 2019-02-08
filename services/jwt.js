'use strict'

var jwt = require('jwt-simple')
var moment = require('moment')

exports.createToken = (user) => {
  var payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    iat: moment().unix(),
    exp: moment().add(3, 'days').unix()
  }

  return jwt.encode(
    {
      sub: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
      image: user.image,
      iat: moment().unix(),
      exp: moment().add(3, 'days').unix()
    }, 'clave_secreta'
  )
}