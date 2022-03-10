import { Request, Response, NextFunction } from "express";
// Models
import Pacient from "../models/pacientModel";

export const getAllPacients = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const Result = await Pacient.find().select("-__v").sort("+_id");

        response.status(200).json({
            status: "success",
            data: Result,
        });
    } catch (err: any) {
        response.status(400).json({
            status: "Failure",
            message: err.message,
            code: err.code,
        });
    }
};

// cahnge

export const createPacient = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const { nome, idade, cidade, estado } = request.body;

        const newPacient = await Pacient.create({
            nome,
            idade,
            cidade,
            estado,
            dataCadastro: Date.now(),
        });

        response.status(200).json({
            status: "success",
            data: newPacient,
        });
    } catch (err: any) {
        response.status(400).json({
            status: "Failure",
            message: err.message,
            code: err.code,
        });
    }
};
