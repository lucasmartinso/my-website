import { Request, Response } from "express";
import * as projectRepository from "../repositories/projectRepository";
import { projectInfo } from "../types/projectType";

export async function addProject() {
    
} 

export async function excludeProject() {
    
} 

export async function updateProjet() {
    
} 

export async function getProjects(type: string | undefined): Promise<projectInfo[]> { 
    if(!type) { 
        const projects: projectInfo[] = await projectRepository.getProjects();
        return projects;
    } else { 
        const projects: projectInfo[] = await projectRepository.getProjectsType(type);
        return projects;
    }
}

export async function getPinnedProjects(): Promise<projectInfo[]> {
    const projectsPinned: projectInfo[] = await projectRepository.getPinnedProjects(); 

    return projectsPinned;
} 

export async function getProjectInfo(id: number): Promise<projectInfo> {
    const projectInfos: projectInfo = await projectRepository.getProjectInfo(id); 

    return projectInfos;
} 