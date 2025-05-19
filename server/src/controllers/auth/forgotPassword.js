import pool from '../../config/db.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const userRes = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userRes.rows.length === 0) {
            return res.status(200).json({ message: `A reset link has been sent to ${email}`});
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expires = new Date(Date.now() + 1000 * 60 * 30);

        await pool.query(
            "UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE email = $3",
            [token, expires, email]
        );

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const frontendBaseUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        const resetUrl = `${frontendBaseUrl}/resetPassword?token=${token}`;

        await transporter.sendMail({
            to: email,
            subject: "Password Reset",
            text: `Reset your password: ${resetUrl}`,
        });

        res.json({ message: `A reset link has been sent to ${email}`});
    } catch (error) {
        console.error("Forgot password error:", error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
};