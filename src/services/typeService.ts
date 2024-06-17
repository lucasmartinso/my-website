import * as typeRepository from "../repositories/typeRepository"; 
import { ptype } from "../types/typeType";

export async function getTypes() {
    const types: ptype[] = await typeRepository.getTypes();

    return types;
}