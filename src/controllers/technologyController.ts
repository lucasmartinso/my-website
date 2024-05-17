import { Request, Response } from "express";
import { technology } from "../types/technologyType";
import * as technologyService from "../services/technologyService";

export async function getTechnologies(req: Request, res: Response): Promise<void> { 
    const technologies: technology[] = await technologyService.getTecnologies();

    res.status(200).send(technologies);
}

export async function addTechnology(req: Request, res: Response): Promise<void> {
    const technology: technology = req.body;

    await 

    res.status(201).send('Tecnologia adicionada com sucesso');
}