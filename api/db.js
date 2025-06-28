// // import knex from "knex";
// // import { knex } from 'knex/knex.mjs';
// import knex from 'knex';

// // const db = knex({
// //     client: 'mysql2',
// //     connection: {
        
// //     }
// // });


// // export default db

// // const knex = require('knex')

// const db = knex({
//     client: 'mysql2',
//     connection: {
//       host: 'localhost',
//       database: 'stacked',
//       user: 'root',
//       password: 'root',
//     },
//   });
  
//   try {
//     // Create a table
//     await knex.schema
//       .createTable('users', (table) => {
//         table.increments('id');
//         table.string('user_name');
//       })
//       // ...and another
//       .createTable('accounts', (table) => {
//         table.increments('id');
//         table.string('account_name');
//         table.integer('user_id').unsigned().references('users.id');
//       });
  
//     // Then query the table...
//     const insertedRows = await knex('users').insert({ user_name: 'Tim' });
  
//     // ...and using the insert id, insert into the other table.
//     await knex('accounts').insert({
//       account_name: 'knex',
//       user_id: insertedRows[0],
//     });
  
//     // Query both of the rows.
//     const selectedRows = await knex('users')
//       .join('accounts', 'users.id', 'accounts.user_id')
//       .select('users.user_name as user', 'accounts.account_name as account');
  
//     // map over the results
//     const enrichedRows = selectedRows.map((row) => ({ ...row, active: true }));
  
//     // Finally, add a catch statement
//   } catch (e) {
//     console.error(e);
//   }


//   export default db;


import knex from 'knex';

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    database: 'stacked',
    user: 'root',
    password: 'root',
  },
});

export default db;

// If you still want to create tables imperatively (NOT recommended for production):
const setupTables = async () => {
  try {
    // Create 'users' table if it doesn't exist
    const hasUsers = await db.schema.hasTable('users');
    if (!hasUsers) {
      await db.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('user_name');
      });
      console.log('Created users table');
    }

    // Create 'accounts' table if it doesn't exist
    const hasAccounts = await db.schema.hasTable('accounts');
    if (!hasAccounts) {
      await db.schema.createTable('accounts', (table) => {
        table.increments('id').primary();
        table.string('account_name');
        table.integer('user_id').unsigned().references('id').inTable('users');
      });
      console.log('Created accounts table');
    }
  } catch (e) {
    console.error('Database setup failed:', e);
  }
};
