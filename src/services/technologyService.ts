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