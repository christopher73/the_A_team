//  POPULATE DB
//  ex:
//  do  "sequelize db:seed:all" to apply seeds
//  =============================================================

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Financial_Infos",
      [
        {
          monthly_salary: 4500,
          balance: 450,
          housing: 45,
          utilities: 45,
          food: 45,
          insurance: 45,
          debts: 45,
          total_expenses: 45,
          savings: 45,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Financial_Infos", null, {});
  }
};
