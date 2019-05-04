// import models
var db = require("../models");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

module.exports = function(app) {
  //  POST USERS LOGIN INFO
  //  =============================================================

  app.get("/", function(req, res) {
    res.render("index", false);
  });

  // app.post("/submit_user", function(req, res) {
  //   db.Users.create(req.body).then(function(dbUserInfo) {
  //     res.json(dbUserInfo);
  //   });
  // });

  //  POST USERS FINANCIAL INFO
  //  =============================================================
  app.post("/submit_info", auth, function(req, res) {
    db.Financial_Infos.update(req.body).then(function(dbFinInfo) {
      res.json(dbFinInfo);
    });
  });
  //  GET ALL finacial_info from  a USER
  //  =============================================================
  app.get("/my_info", auth, function(req, res) {
    console.log("this is ", req.user.id);

    db.Financial_Infos.findAll({
      where: {
        id: req.user.id
      },
      attributes: [
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
      let response = dbFinInfo;
      res.send(response);
    });
  });

  //=================== create USER
  app.post("/users", async (req, res) => {
    let user = await db.Users.findOne({ where: { email: req.body.email } });
    if (user) return res.status(400).send("User already used");
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: password
    }).then(function(new_user) {
      db.Financial_Infos.create({
        id: new_user.id,
        monthly_salary: 0,
        balance: 0,
        housing: 0,
        utilities: 0,
        food: 0,
        insurance: 0,
        debts: 0,
        total_expenses: 0,
        savings: 0
      });
      const token = jwt.sign({ id: new_user.id }, config.get("jwtPrivateKey"));
      res.json({
        token: token,
        id: new_user.id,
        name: new_user.name,
        email: new_user.email
      });
    });
  });

  //=================== authorize USER
  app.post("/user_auth", async (req, res) => {
    let user = await db.Users.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).send("Invalid email or password");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }
    const token = jwt.sign({ id: user.id }, config.get("jwtPrivateKey"));
    res.send(token);
  });
};
