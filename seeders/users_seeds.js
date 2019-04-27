//  POPULATE DB
//  ex:
//  do  "sequelize db:seed:all" to apply seeds
//  =============================================================

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          user_name: "cffr",
          first_name: "chris",
          last_name: "fajardo",
          email: "johnDoe@test.com",
          password: "abc123",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Users", null, {});
  }
};
