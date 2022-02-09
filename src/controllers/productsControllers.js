const path = require('path')

let productsController = {
    detail: function(req, res) { /* SE ESPECIFICA LA RUTA /products/deatil/productid */
        let prodId = req.params.productid
        if ( prodId === undefined) {
            res.send("Producto No encontrado")
        } else {
            let prodPath = `../views/products/${prodId}.html`
            res.sendFile(path.resolve(__dirname, prodPath))
        }  
    }
}

module.exports = productsController