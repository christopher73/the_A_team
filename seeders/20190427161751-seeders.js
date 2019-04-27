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
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Users", null, {});
  }
};
