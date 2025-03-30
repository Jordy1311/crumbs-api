import express from "express";
import dotenv from "dotenv";

import connectToMongoDb from './db';

dotenv.config();

connectToMongoDb();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[Server]  Running on http://localhost:${port}`);
});
