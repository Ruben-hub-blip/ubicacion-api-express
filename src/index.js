import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // ← debe ir aquí arriba

import localidadRoutes from "./routes/localidad.routes.js";
import barrioRoutes from "./routes/barrio.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/localidades", localidadRoutes);
app.use("/barrios", barrioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});