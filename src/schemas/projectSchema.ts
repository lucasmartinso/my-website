import joi from "joi";

export const projectSchema = joi.object({ 
    name: joi.string().min(2).max(30).required().label("Name must be between 2 and 30 characters"),


})