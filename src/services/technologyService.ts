import * as technologyRepository from "../repositories/technologyRepository"; 
import { technology } from "../types/technologyType";

export async function getTecnologies() {
    const technologies: technology[] = await technologyRepository.getTecnologies();

    return technologies;
}