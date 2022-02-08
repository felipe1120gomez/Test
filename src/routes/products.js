const express = require('express')
const path = require('path')

let productsController = require('../controllers/productsControllers.js')
let router = express.Router()

router.get('/detail', productsController.detail)

module.exports = router