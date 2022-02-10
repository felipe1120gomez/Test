let productsController = {
    detail: function(req, res) { /* SE ESPECIFICA LA RUTA /products/deatil/productid */
        let prodId = req.params.productid
        if ( prodId === undefined) {
            res.send("Producto No encontrado")
        } else {
            let prodPath = `./products/${prodId}`
            res.render(prodPath)
        }  
    }
}

module.exports = productsController