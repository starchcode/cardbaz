const User = require("../models/user");

module.exports = {
    greeting(req, res){
        res.send({ msg: "Hello!" });
    }
}