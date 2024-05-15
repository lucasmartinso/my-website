import { Request, Response } from "express";
import * as projectRepositorie from "../repositories/projectRepositorie";
import { projectInfo } from "../types/projectType";

export async function addProject() {
    
} 

export async function excludeProject() {
    
} 

export async function updateProjet() {
    
} 

export async function getProjects(): Promise<projectInfo[]> { 
    const projects: projectInfo[] = await projectRepositorie.getProjects();

    return projects;
}