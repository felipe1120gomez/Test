const express = require('express')

let indexController = require('../controllers/indexControllers.js')
let router = express.Router()

router.get('/', indexController.home)

module.exports = router