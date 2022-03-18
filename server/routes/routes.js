const UsersController = require("../controllers/users_controllers");


module.exports = (app) => {
    app.get("/", UsersController.greeting);
    // app.post("/users", UsersController.create);
}