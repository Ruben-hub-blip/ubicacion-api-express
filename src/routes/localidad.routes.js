import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET /localidades
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM localidades ORDER BY nombre"
    );

    res.json(result.rows);

  } catch (error) {
    console.error("ERROR REAL:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;