import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET /barrios/:id_localidad
router.get("/:id_localidad", async (req, res) => {
  const { id_localidad } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM barrios WHERE id_localidad = $1 ORDER BY nombre",
      [id_localidad]
    );

    res.json(result.rows);
  } catch (error) {
  console.error("ERROR REAL:", error);
  res.status(500).json({ error: error.message });
}
});

export default router;