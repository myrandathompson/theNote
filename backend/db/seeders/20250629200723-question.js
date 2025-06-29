'use strict';
import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // Define schema in production
}
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Questions', [
    {
      userId: 1,
      description: 'What is the capital of France?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      description: 'How does JavaScript asynchronous programming work?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      description: 'What are the benefits of using Docker containers?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Questions', null, {});
}
