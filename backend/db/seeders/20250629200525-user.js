"use strict";

import { hashSync } from "bcryptjs";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  options.tableName = "Users";

  return queryInterface.bulkInsert(
    options,
    [
      {
        id: 1,
        email: 'demo@user.io',
        hashedPassword: hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'user1@user.io',
        hashedPassword: hashSync('password2'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: 'user2@user.io',
        hashedPassword: hashSync('password3'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
}
export async function down(queryInterface, Sequelize) {
  options.tableName = "Users";
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
  }, {});
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
