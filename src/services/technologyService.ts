import * as technologyRepository from "../repositories/technologyRepository"; 
import { technology } from "../types/technologyType";

export async function getTecnologies() {
    const technologies: technology[] = await technologyRepository.getTecnologies();

    return technologies;
}

export async function addTechnology(technology: technology) {
    const repetadTech: technology[] = await technologyRepository.getTecnologyName(technology.name);

    if(!repetadTech.length) throw { type: "Conflit", message:"Tecnologia já cadastrada"}

    await technologyRepository.addTechnology(technology);
}

export async function deleteTechnology(id: number) {
    const existTech: technology[] = await technologyRepository.getTecnologyId(id);

    if(!existTech.length) throw { type: "Not Found", message:"Tecnologia não existe na base de dados"}

    await technologyRepository.deleteTechnology(id);
}

export async function updateTechnology(id: number, technology: technology) {
    const existTech: technology[] = await technologyRepository.getTecnologyId(id);

    if(!existTech.length) throw { type: "Not Found", message:"Tecnologia não existe na base de dados"}

    await technologyRepository.updateTechnology(id, technology);
}