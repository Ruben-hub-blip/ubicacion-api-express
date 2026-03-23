import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(`
      SELECT 
        id,
        nombre,
        latitud,
        longitud
      FROM barrios
      WHERE id_localidad = $1
      ORDER BY nombre
    `,[id]);

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/detalle/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(`
    SELECT id, nombre, latitud, longitud
    FROM barrios
    WHERE id = $1
  `, [id]);

  res.json(result.rows[0]);
});

export default router;