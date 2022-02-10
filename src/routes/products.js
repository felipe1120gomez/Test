const express = require('express')

let productsController = require('../controllers/productsControllers.js')
let router = express.Router()

/* productid es el nombre del archivo html que es un detalle de producto */
router.get('/detail/:productid?', productsController.detail)

module.exports = router