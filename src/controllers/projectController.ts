import { Request, Response } from "express";
import * as projectService from "../services/projectService";
import { EnumObject, projectComplete, projectInfo, types } from "../types/projectType";

export async function getProjects(req: Request, res: Response): Promise<void> { 
    const { type }: { type?: string | undefined } = req.query;
    const projects: projectInfo[] = await projectService.getProjects(type); 

    res.status(200).send(projects);
}  

export async function getPinnedProjects(req: Request, res: Response): Promise<void> {
    const projects: projectInfo[] = await projectService.getPinnedProjects();

    res.status(200).send(projects);
}

export async function getProjectInfo(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);
    const project: projectComplete = await projectService.getProjectInfo(id); 
    
    res.status(200).send(project);
}

export async function getProjectTypes(req: Request, res: Response): Promise<void> {
    const types: EnumObject[] = await projectService.getProjectType(); 
    
    res.status(200).send(types);
}

export async function addProject(req: Request, res: Response): Promise<void> {
    const project: projectComplete = req.body;
    await projectService.addProject(project);
    
    res.status(201).send("Projeto criado com sucesso");
} 

export async function deleteProject(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);
    await projectService.deleteProject(id);

    res.status(200).send('Projeto deletado com sucesso');
} 

export async function updateProjet(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);
    const project: projectComplete = req.body; 

    await projectService.updateProject(id, project);

    res.status(200).send('Projeto ataualizado com sucesso');
} 