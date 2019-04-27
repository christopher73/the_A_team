// Import the model (burger_db.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Users.findAll({
      attributes: ["first_name"]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};

// app.post("/api/burgers", function(req, res) {
//   users.create(
//     ["name", "sleepy"],
//     [req.body.name, req.body.sleepy],
//     function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     }
//   );
// });

// app.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger_db.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });
