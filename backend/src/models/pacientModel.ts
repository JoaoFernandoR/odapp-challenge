import mongoose from "mongoose";
import validator from "validator";

const pacientSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            trim: true,
            required: [true, "Please, insert a valid pacientname"],
            minlength: [5, "The name must have more than 5 characters"],
            maxlength: [40, "The name must have less than 40 characters"],
        },
        idade: {
            type: Number,
            required: [true, "Must input valid age"],
        },
        dataCadastro: {
            type: Date,
            trim: true,
        },
        cidade: {
            type: String,
            trim: true,
            required: [true, "Must input valid city"],
        },
        estado: {
            type: String,
            trim: true,
            required: [true, "Must input valid State"],
            length: 2,
        },
    },
    { timestamps: true }
);

const Pacient = mongoose.model("Pacients", pacientSchema);

export default Pacient;
