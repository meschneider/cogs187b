var fs = require('fs');

module.exports = {
    post: function (req, res) {
    	var data = require("./cart.json");
    	var id = req.body.index;
        data.cart.splice(id,1); //remove 1 array at id location
        fs.writeFile("ajax/cart.json", JSON.stringify(data));
        res.success();
    }
}