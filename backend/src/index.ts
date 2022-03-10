import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import PacientsRoute from "./routes/pacientsRoute";

const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

mongoose
    .connect(`${process.env.DATABASE}`)
    .then((con) => console.log("DB connection successfull"))
    .catch((err) => console.log(err));

// Rotas
app.use("/api/v1/pacients", PacientsRoute);

const PORT: string | number = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}...`));
