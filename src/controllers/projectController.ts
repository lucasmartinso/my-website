import { Request, Response } from "express";
import * as projectService from "../services/projectService";
import { projectInfo } from "../types/projectType";

export async function addProject(req: Request, res: Response): Promise<void> {
    
} 

export async function excludeProject(req: Request, res: Response): Promise<void> {
    
} 

export async function updateProjet(req: Request, res: Response): Promise<void> {
    
} 

export async function getProjects(req: Request, res: Response): Promise<void> { 
    const projects: projectInfo[] = await projectService.getProjects(); 

    res.status(200).send(projects);
}  

export async function getProjectsType(req: Request, res: Response): Promise<void> {
    const type: string = req.params.type;
    const projects: projectInfo[] = await projectService.getProjects(); 
    
    res.status(200).send(projects);
}