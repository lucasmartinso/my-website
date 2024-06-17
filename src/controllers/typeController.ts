import { Request, Response } from "express";
import { ptype } from "../types/typeType";
import * as typeService from "../services/typeService";

export async function getTypes(req: Request, res: Response): Promise<void> {
    const types: ptype[] = await typeService.getTypes();

    res.status(200).send(types);
}

export async function postTypes(req: Request, res: Response): Promise<void> {
    const { name }: { name: string } = req.body;
    
    await typeService.postTypes(name);

    res.status(201).send('Novo tipo criado');
}