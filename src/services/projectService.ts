import { Request, Response } from "express";
import * as projectRepositorie from "../repositories/projectRepositorie";
import { projectInfo } from "../types/projectType";

export async function addProject() {
    
} 

export async function excludeProject() {
    
} 

export async function updateProjet() {
    
} 

export async function getProjects(type: string | undefined): Promise<projectInfo[]> { 
    if(!type) { 
        const projects: projectInfo[] = await projectRepositorie.getProjects();
        return projects;
    } else { 
        const projects: projectInfo[] = await projectRepositorie.getProjects();
        return projects;
    }
}