import pg from 'pg';
const { Pool } = pg;
import "dotenv/config";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const testDbConnection = async () => {
    try {
      const client = await pool.connect();
      console.log("✅ Database connected successfully");
      client.release();
    } catch (error) {
      console.error("❌ Database connection error", error.stack);
    }
  };
  
  testDbConnection();


  export default pool;