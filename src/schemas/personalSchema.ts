import joi from "joi";

export const projectSchema = joi.object({ 
    email: joi.string().uri().email().required().label("Senha ou email inválidos!!"),
    password: joi.string().pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)[\d\w\W]{8,60}$/).required().label("Senha ou email inválidos!!"),
});