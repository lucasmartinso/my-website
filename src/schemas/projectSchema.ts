import joi from "joi";

//fazer regex para o google drive com as documentacoes
//fazer regex para o github com o readm.md
export const projectSchema = joi.object({ 
    name: joi.string().min(2).max(30).required().label("Nome tem que ter entre 2 e 30 caracteres"),
    type: joi.string().valid('web','notebook').required().label("Type tem que ser: 'web' ou 'notebook'"),
    image: joi.string().uri().required().label("Imagem tem que ser uma url"),
    description: joi.string().min(15).max(500).required().label("Descrição obrigatoria com no minimo 15 caracteres e no maximo 500"),
    url: joi.string().uri().label("Deploy tem que ser de uma url"),
    documentation: joi.string().uri().required().label("Tem que ser uma url do drive"), 
    front: joi.string().uri().label("Tem que ser uma url para o GitHub"),
    back: joi.string().uri().label("Tem que ser uma url para o GitHub"),
    pinned: joi.boolean().label("Tem que ser 'true' ou 'false'")
});