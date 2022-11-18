//? EN ESTE ARCHIVO VAMOS A TENER LAS RUTAS Y SUS RESPECTIVOS VERBOS

const router = require('express').Router()

//! const express = require('express)
//! const router = express.Router()

const taskServices = require('./tasks.services')

router.get('/todo', (taskServices.getAllToDo))
router.post('/todo', (taskServices.postToDo))

router.get('/todo/:id', (taskServices.getToDoById))

module.exports = router