import joi from "joi";

export const personalSchema = joi.object({ 
    email: joi.string().email().required().label("Senha ou email inválidos 1!!"),
    password: joi.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~])[A-Za-z\d!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]{8,60}$/).required().label("Senha ou email inválidos 2!!"),
});