const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes/routes");

const app = express();

// In case of test environment connect to the relevant db
mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== "test") {
    mongoose.connect("mongodb://localhost/moneyguy");
}

app.use(morgan('combined'));
app.use(bodyParser.json());
routes(app);

// error handling custom middleware
app.use((err, req, res, next) => {
    // 422 unprocessable entity
    res.status(422).send({ error: err.message });
});

module.exports = app;