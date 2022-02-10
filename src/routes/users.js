const express = require('express')

let usersController = require('../controllers/usersControllers.js')
let router = express.Router()

router.get('/login', usersController.login)

router.get('/register', usersController.register)

module.exports = router