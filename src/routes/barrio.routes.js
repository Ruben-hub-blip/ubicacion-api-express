import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT 
        b.id,
        b.nombre AS barrio,
        l.nombre AS localidad
      FROM barrios b
      JOIN localidades l ON b.id_localidad = l.id
      WHERE b.id = $1
      `,
      [id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error("ERROR REAL:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;