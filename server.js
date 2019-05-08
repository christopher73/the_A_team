var express = require("express");
var hbs = require("express-handlebars");
var app = express();
const fetch = require('node-fetch');
// Requiring our models for syncing
var db = require("./models");
const config = require("config");
var PORT = process.env.PORT || 8080;
if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR : jwtPrivateKey is not defined");
  process.exit(1);
}
//  HANDLEBARS
//  =============================================================
app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  ROUTES
//  =============================================================
require("./controllers/controller.js")(app);

//  START SERVER
//  =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
