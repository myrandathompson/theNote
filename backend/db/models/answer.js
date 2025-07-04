'use strict';
import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // Define schema in production
}
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Answers', [
    {
      questionId: 1,
      userId: 2,
      answer: 'The capital of France is Paris.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      questionId: 2,
      userId: 1,
      answer: 'Asynchronous programming allows non-blocking execution in JavaScript using callbacks, promises, or async/await.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      questionId: 3,
      userId: 2,
      answer: 'Docker containers isolate applications, making them portable and consistent across environments.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Answers', null, {});
}
