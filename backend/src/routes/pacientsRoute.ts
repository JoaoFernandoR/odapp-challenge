import express from "express";

import {
    createPacient,
    getAllPacients,
} from "../controllers/pacientsController";

const routes = express.Router();

// api/v1/pacients
routes.route("/").get(getAllPacients).post(createPacient);

export default routes;
