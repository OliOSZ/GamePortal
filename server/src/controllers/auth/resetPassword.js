import pool from '../../config/db.js';
import bcrypt from 'bcryptjs';

export const resetPassword = async (req, res) => {
    try {
    const { token, password} = req.body;
    const userRes = await pool.query("SELECT * FROM users WHERE reset_token = $1 AND reset_token_expires > NOW()", 
        [token]
    );
    if (userRes.rows.length === 0) {
        return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
        "UPDATE users SET password_hash = $1, reset_token = NULL, reset_token_expires = NULL WHERE id = $2",
        [hashed, userRes.rows[0].id]
    );

    res.json({ message: "Password has been reset successfully" });
    } catch (error) {
        console.error("Reset password error:", error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
}