export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'stacked',
      user: 'root',
      password: 'root'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
