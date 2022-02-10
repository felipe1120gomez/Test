const express = require('express')
const path = require('path')

let indexRouter = require('./routes/index.js')
let productsRouter = require('./routes/products.js')
let usersRouter = require('./routes/users.js')

const app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//npm run serve
app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo'))

//pagina home
//usar localhost:3030/
app.use('/', indexRouter)

//pagina detalle producto
//usar localhost:3030/products/+++++
app.use('/products', productsRouter) /* LLEVA EL NOMBRE DE LA CARPETA */

//pagina carrito
//usar localhost:3030/cart
/* app.get('/cart', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
}) */

//paginas login y registro usuario
//usar localhost:3030/users/loging ó register
app.use('/users', usersRouter) /* LLEVA EL NOMBRE DE LA CARPETA */

app.use(express.static(path.join(__dirname, '../public'))) /* IMPORTANTE LOS DOS PUNTOS */
/* app.use(express.static(path.join(__dirname, './views'))) */