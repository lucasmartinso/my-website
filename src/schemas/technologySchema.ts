import joi from "joi";

export const technologySchema = joi.object({ 
    name: joi.string().min(1).max(30).required().label("Nome tem que ter entre 1 e 30 caracteres")
});