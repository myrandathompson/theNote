import { dbFile } from './index';

export const development = {
  storage: dbFile,
  dialect: "sqlite",
  seederStorage: "sequelize",
  logQueryParameters: true,
  typeValidation: true
};
export const test = {
  dialect: 'sqlite',
  storage: ':memory:',
};
export const production = {
  use_env_variable: 'postgresql://stacked_user:s9RJ6OllZaxd2V0wPmOpwhX78dXul78Z@dpg-d1gq9kripnbc73b2qnsg-a.oregon-postgres.render.com/stacked',
  dialect: 'postgres',
  seederStorage: 'sequelize',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
    schema: process.env.SCHEMA
  }
};