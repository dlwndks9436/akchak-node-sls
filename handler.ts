import { Handler } from "aws-lambda";
import * as mysql from "mysql2";
import { exec } from "node:child_process";

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "akchakdb",
});

export const hello: Handler = async (event: any) => {
  const res = connection.connect((err) => {
    if (err) {
      return;
    }
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
        res,
      },
      null,
      2
    ),
  };
};

export const migrate: Handler = async (event: any) => {
  exec("knex migrate:latest --env production", (err, output) => {
    if (err) {
      console.log("could not execute migration: ", err);
      return;
    }
    console.log("Migration output: \n", output);
  });
};
