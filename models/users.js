module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_name: {
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //

  return Users;
};

module.exports = function(sequelize, DataTypes) {
  var Finances = sequelize.define("Finances", {
    monthly_salary: {
      type: DataTypes.INTEGER
    },
    balance: {
      type: DataTypes.INTEGER
    },
    housing: {
      type: DataTypes.INTEGER
    },
    utilities: {
      type: DataTypes.INTEGER
    },
    food: {
      type: DataTypes.INTEGER
    },
    insurance: {
      type: DataTypes.INTEGER
    },
    debts: {
      type: DataTypes.INTEGER
    },
    total_expenses: {
      type: DataTypes.INTEGER
    }
  });
  return Finances;
};
