import * as typeRepository from "../repositories/typeRepository"; 
import { ptype } from "../types/typeType";

export async function getTypes(): Promise<ptype[]> {
    const types: ptype[] = await typeRepository.getTypes();

    return types;
}

export async function postTypes(name: string): Promise<void> {
    const existName: ptype[] = await typeRepository.existNameType(name);

    if(existName) throw { type: "Conflit", message: "Nome já existente"}

    await typeRepository.postType(name);
}

export async function deleteType(id: number): Promise<void> {
    const existType: ptype[] = await typeRepository.existType(id);

    if(existType) throw { type: "Conflit", message: "Tipo não existente"}

    await typeRepository.deleteType(id);
}