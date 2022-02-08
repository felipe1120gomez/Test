const express = require('express')
const path = require('path')

let indexController = require('../controllers/indexControllers.js')
let router = express.Router()

router.get('/', indexController.home)

module.exports = router