'use strict'

var jwt = require('jwt-simple')
var moment = require('moment')

exports.ensureAuth = (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(403).send({message: 'La petición no tiene cabecera de autenticación'})
  }

  try{
    var payload = jwt.decode(req.headers.authorization.replace(/['"]+/g, ''), 'clave_secreta')

    if(payload.exp <= moment().unix()){
      return res.status(401).send({message: 'El token ha expirado'})
    }
  }catch(ex){
    console.log(ex)
    return res.status(404).send({message: 'Token no válido'})
  }

  req.user = payload
  next()
}