import express from "express";

import satelliteRouter from "./routes/satellite.js";
import planetRouter from "./routes/planets.js";
import adminRouter from "./routes/admin.js";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";

import {
  getPlanetDataset,
  getSatelliteDataset,
} from "./middleware/datasets.js";

const app = express();

app.use("/admin", auth, adminRouter);

app.use(logger);

// Remember: The order of your middleware is very important!
app.use("/satellite", getSatelliteDataset, satelliteRouter);
app.use("/planets", getPlanetDataset, planetRouter);

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
