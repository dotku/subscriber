"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          firstName: "Snoop",
          lastName: "Dog",
          phone: "111-222-3333",
          email: "snoopydog@dogpound.com",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          firstName: "Scooby",
          lastName: "Doo",
          phone: "444-555-6666",
          email: "scooby.doo@misterymachine.com",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          firstName: "Herbie",
          lastName: "Husker",
          phone: "402-437-0001",
          email: "herbie.husker@unl.edu",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
