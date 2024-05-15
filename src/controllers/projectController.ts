import { Request, Response } from "express";
import * as projectService from "../services/projectService";

export async function addProject(req: Request, res: Response): Promise<void> {
    
} 

export async function excludeProject(req: Request, res: Response): Promise<void> {
    
} 

export async function updateProjet(req: Request, res: Response): Promise<void> {
    
} 

export async function getProjects(req: Request, res: Response): Promise<void> { 
    const projects: any = await projectService.getProjects(); 

    res.status(200).send(projects);
}