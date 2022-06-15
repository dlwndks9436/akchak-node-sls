import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: process.env.DATABASE_HOST,
      port: 3306,
      database: "akchakdb",
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      charset: "utf8mb4",
      timezone: "UTC",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.DATABASE_HOST,
      port: 3306,
      database: "akchakdb",
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      charset: "utf8mb4",
      timezone: "UTC",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};

export default config;
