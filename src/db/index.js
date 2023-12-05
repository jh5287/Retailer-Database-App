import pkg from "pg";
const { Pool } = pkg;


// you'll want to put in your own info for password and database
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "users_db",
  host: "localhost",
  port: 5432,
});

export default pool;