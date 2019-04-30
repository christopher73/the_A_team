// import models
var db = require("../models");

module.exports = function(app) {
  //  POST USERS LOGIN INFO
  //  =============================================================

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.post("/submit_user", function(req, res) {
    db.Users.create(req.body).then(function(dbUserInfo) {
      res.json(dbUserInfo);
    });
  });

  //  POST USERS FINANCIAL INFO
  //  =============================================================
  app.post("/submit_info", function(req, res) {
    db.Financial_Infos.create(req.body).then(function(dbFinInfo) {
      res.json(dbFinInfo);
    });
  });
  //  GET ALL finacial_info from all a USER
  //  =============================================================
  app.get("/financial_info/:id", function(req, res) {
    db.Financial_Infos.findAll({
      where: {
        id: req.params.id
      },
      attributes: [
        "monthly_salary",
        "monthly_salary",
        "balance",
        "housing",
        "utilities",
        "food",
        "insurance",
        "debts",
        "total_expenses",
        "savings"
      ]
    }).then(function(dbFinInfo) {
      res.json(dbFinInfo);
    });
  });
};
