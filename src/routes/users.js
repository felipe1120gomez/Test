const express = require('express')
const path = require('path')

let usersController = require('../controllers/usersControllers.js')
let router = express.Router()

router.get('/login', usersController.login)

router.get('/register', usersController.register)

module.exports = router