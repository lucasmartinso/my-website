import { Request, Response } from "express";
import * as projectRepository from "../repositories/projectRepository";
import { projectInfo } from "../types/projectType";

export async function getProjects(type: string | undefined): Promise<projectInfo[]> { 
    let projects: projectInfo[];

    if(!type) projects = await projectRepository.getProjects();
    else projects = await projectRepository.getProjectsType(type);

    if(!projects) throw { type: "Not Found", message:"None projects registred at database"}
    
    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> {
    const projectsPinned: projectInfo[] = await projectRepository.getPinnedProjects(); 

    if(!projectsPinned) throw { type: "Not Found", message:"None projects registred at database"}

    return projectsPinned;
} 

export async function getProjectInfo(id: number): Promise<projectInfo> {
    const projectInfos: projectInfo = await projectRepository.getProjectInfo(id);

    if(!projectInfos) throw { type: "Not Found", message:"This project doesn't exists"}

    return projectInfos;
} 

//estruturar regex
export async function addProject(project: projectInfo): Promise<void> {
    //regex(project)
    await projectRepository.addProject(project);
} 

export async function excludeProject(id: number) {
    
} 

export async function updateProjet() {
    
} 