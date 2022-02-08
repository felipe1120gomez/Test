const path = require('path')

let userController = {
    login: function(req, res) { /* SE ESPECIFICA LA RUTA /users/register */
        res.sendFile(path.resolve(__dirname, '../views/users/login.html'))
    },

    register: function(req, res) { /* SE ESPECIFICA LA RUTA /users/register */
        res.sendFile(path.resolve(__dirname, '../views/users/register.html'))
    }

}

module.exports = userController