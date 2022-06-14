import { Handler } from "aws-lambda";
import * as mysql from "mysql2";

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
