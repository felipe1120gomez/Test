const path = require('path')

let productsController = {
    detail: function(req, res) { /* SE ESPECIFICA LA RUTA /products/deatil */
        res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'))
        /* IMPLEMENTAR RUTAS PARAMETRIZADAS */
    }
}

module.exports = productsController