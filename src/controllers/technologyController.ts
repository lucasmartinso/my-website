import { Request, Response } from "express";
import { technology } from "../types/technologyType";
import * as technologyService from "../services/technologyService";

export async function getTechnologies(req: Request, res: Response): Promise<void> { 
    const technologies: technology[] = await technologyService.getTecnologies();

    res.status(200).send(technologies);
}

export async function addTechnology(req: Request, res: Response): Promise<void> {
    const technology: technology = req.body;

    await technologyService.addTechnology(technology);

    res.status(201).send('Tecnologia adicionada com sucesso');
}

export async function deleteTechnology(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);

    await technologyService.deleteTechnology(id);

    res.status(200).send('Tecnologia excluida da base de dados com sucesso');
}

export async function updateTechnology(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);
    const technology: technology = req.body;

    await technologyService.updateTechnology(id,technology);

    res.status(200).send('Tecnologia atualizada com sucesso');
}

export async function searchTech(req: Request, res: Response): Promise<void> {
    const tech: string = req.body.tech;

    const technologies: technology[] = await technologyService.searchTech(tech);

    res.status(200).send(technologies);
}