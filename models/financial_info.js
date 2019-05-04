module.exports = function(sequelize, DataTypes) {
  var Financial_Infos = sequelize.define("Financial_Infos", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
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
    },
    savings: {
      type: DataTypes.INTEGER
    }
  });
  return Financial_Infos;
};

// ============================================
// NOTES:
// All number types (INTEGER, BIGINT, FLOAT, DOUBLE, REAL, DECIMAL)
// expose the properties UNSIGNED and ZEROFILL
// The CHAR and STRING types expose the BINARY property
// ============================================
