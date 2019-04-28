var db = require("../models");

module.exports = function(app) {
  app.post("/signup", function(req, res) {
    console.log(req.body);
    db.Users.create({
      user_name: req.body.user_name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.post("/signup/:id", function(req, res) {
    console.log(req.body);
    db.Finances.create({
      monthly_salary: req.body.monthly_salary,
      balance: req.body.balance,
      housing: req.body.housing,
      utilities: req.body.utilities,
      food: req.body.food,
      insurance: req.body.insurance,
      debts: req.body.debts
    }).then(function(dbFinances) {
      res.json(dbFinances);
    });
  });

  app.get("/profile/:id", function(req, res) {
    db.Finances.findAll({}).then(function(dbFinances) {
      res.json(dbFinances);
    });
  });
};
