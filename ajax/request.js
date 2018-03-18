var fs = require('fs');

module.exports = {
    post: function (req, res) {
        if (!req.body.start) {
            return;
        }
        if (!req.body.end) {
            return;
        }

        var d = require("./cart.json");
        console.log(req.body);
        d.cart.unshift(req.body);
        fs.writeFile("ajax/cart.json", JSON.stringify(d));
        res.success();
    }
}