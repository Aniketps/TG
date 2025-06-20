let express = require("express");
let bodyParser = require("body-parser");
    require("dotenv").config();

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.json());

module.exports = app;