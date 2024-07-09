import joi from "joi";

export const blogSchema = joi.object({ 
    tittle: joi.string().min(2).required().label("Nome tem que ter no mínimo 2 caracteres"),
    description: joi.string().min(10).required().label("Descrição obrigatoria com no minimo 10 caracteres"),
    text: joi.string().min(50).required().label("Texto obrigatorio com no minimo 50 caracteres")
});