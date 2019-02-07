'use strict'

const pruebas = (req, res) => {
  res.status(200).send({
    message: 'Probando la acción de controlador de usuarios'
  })
}

module.exports = {
  pruebas
}