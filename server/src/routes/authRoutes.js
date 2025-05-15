import express from "express";
import { registerUser } from "../controllers/auth/signup.js";
import { loginUser } from "../controllers/auth/login.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

export default router;
