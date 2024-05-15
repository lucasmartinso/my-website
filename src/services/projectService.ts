import { Request, Response } from "express";
import * as projectRepositorie from "../repositories/projectRepositorie";

export async function addProject(req: Request, res: Response): Promise<void> {
    
} 

export async function excludeProject(req: Request, res: Response): Promise<void> {
    
} 

export async function updateProjet(req: Request, res: Response): Promise<void> {
    
} 

export async function getProjects(req: Request, res: Response): Promise<void> { 
    const projects = await projectRepositorie.getProjects();

    return projects;
}