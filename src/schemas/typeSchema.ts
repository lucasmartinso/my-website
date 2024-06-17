import joi from "joi";

export const typeSchema = joi.object({ 
    name: joi.string().min(1).max(50).required().label("Nome tem que ter entre 1 e 30 caracteres")
});