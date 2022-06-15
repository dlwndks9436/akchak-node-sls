import knexfile from "../knexfile";
import knex from "knex";

const environment = process.env.ENVIRONMENT || "development";
const config = knexfile[environment];

export default knex(config);
