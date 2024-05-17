import * as technologyRepository from "../repositories/technologyRepository"; 

export async function getTecnologies() {
    const technologies: any = await technologyRepository.getTecnologies();

    return technologies;
}