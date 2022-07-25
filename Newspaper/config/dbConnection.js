/*
In this code was created the connection 
with the database MySQL. For this, I installed
 the connector mysql through npm i mysql --save
*/

import { createConnection } from "mysql";

const connMySQL = function () {
  return createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newspaper",
  });
};
export default function () {
  return connMySQL;
}
