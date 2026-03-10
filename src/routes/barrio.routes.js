import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT 
        b.id,
        b.nombre,
        b.latitud,
        b.longitud,
        l.nombre AS localidad
      FROM barrios b
      JOIN localidades l ON b.id_localidad = l.id
      ORDER BY b.nombre
    `);

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;