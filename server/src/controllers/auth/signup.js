import pool from "../../config/db.js";
import bcrypt from "bcryptjs";
import crypto from 'crypto';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const usernameCheck = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (usernameCheck.rows.length > 0) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const userId = crypto.randomUUID();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (id, username, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, username, email",
      [userId, username, email, hashedPassword]
    );

    console.log("✅ User registered successfully:", newUser.rows[0]);
    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};