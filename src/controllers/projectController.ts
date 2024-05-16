import { Request, Response } from "express";
import * as projectService from "../services/projectService";
import { projectComplete, projectInfo } from "../types/projectType";

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

export async function addProject(req: Request, res: Response): Promise<void> {
    const project: projectInfo = req.body;
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
    const project: projectInfo = req.body; 

    await projectService.updateProjet(id, project)
} 