const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Isa304380!",
  database: "registration",
});
module.exports = connection;