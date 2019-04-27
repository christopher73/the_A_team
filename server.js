var express = require("express");
var hbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

// app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
// app.set("view engine", ".hbs");

// Requiring our models for syncing
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);
//routes
require("./controllers/controller.js")(app);
// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
