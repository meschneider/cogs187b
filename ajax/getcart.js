var fs = require('fs');

module.exports = {
    get: function (req, res) {
    	var cart = require("./cart.json");
        res.json(cart);
    }
}