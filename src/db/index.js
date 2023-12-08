import pkg from "pg";
const { Pool } = pkg;

//this page makes the connection to the database
// you'll want to put in your own info for password and database
const pool = new Pool({
  user: "postgres",
  password: "Daisybelle123",
  database: "retailer-database",
  host: "localhost",
  port: 5432,
});

export default pool;