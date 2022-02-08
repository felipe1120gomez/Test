const path = require('path')

let indexController = {
    home: function(req, res) {
        res.sendFile(path.resolve(__dirname, '../views/index.html'))
    }

}

module.exports = indexController