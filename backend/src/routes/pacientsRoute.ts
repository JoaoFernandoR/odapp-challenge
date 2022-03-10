import express from "express";

import {
    createPacient,
    deletePacient,
    getAllPacients,
    updatePacient,
} from "../controllers/pacientsController";

const routes = express.Router();

// api/v1/pacients
routes.route("/").get(getAllPacients).post(createPacient).delete(deletePacient);

routes.route("/:id").patch(updatePacient);

export default routes;
