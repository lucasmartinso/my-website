import joi from "joi";

export const technologySchema = joi.object({ 
    name: joi.string().min(1).max(30).required().label("Nome tem que ter entre 2 e 30 caracteres")
});