import knex from "knex";


const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'stacked',
        user: 'root',
        password: 'root',
    }
});


export default db