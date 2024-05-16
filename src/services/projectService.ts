import * as projectRepository from "../repositories/projectRepository";
import { projectInfo } from "../types/projectType";

export async function getProjects(type: string | undefined): Promise<projectInfo[]> { 
    let projects: projectInfo[];

    if(!type) {
        projects = await projectRepository.getProjects();
    } else { 
        console.log("OIII");
        if(type !== 'web' && type !== 'notebook') { 
            console.log("AQUIIII");
            throw { type: "Not Found", message:"None projects registred with that type"} 
        }
        projects = await projectRepository.getProjectsType(type);
    }

    if(!projects) throw { type: "Not Found", message:"None projects registred at database"}
    
    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> {
    const projectsPinned: projectInfo[] = await projectRepository.getPinnedProjects(); 

    if(!projectsPinned) throw { type: "Not Found", message:"None projects registred at database"}

    return projectsPinned;
} 

//alterar pra voltar com as tecnologias do projeto 
export async function getProjectInfo(id: number): Promise<projectInfo> {
    const projectInfos: projectInfo = await projectRepository.getProjectInfo(id);

    if(!projectInfos) throw { type: "Not Found", message:"This project doesn't exists"}

    return projectInfos;
} 

export async function addProject(project: projectInfo): Promise<void> {
    
    await projectRepository.addProject(project);
} 

export async function deleteProject(id: number) {
    const candidateDelete: projectInfo = await projectRepository.getProjectInfo(id);

    if(!candidateDelete) throw { type: "Not Found", message:"This project doesn't exists anymore"}
    
    await projectRepository.deleteProject(id);
} 

//regex project
export async function updateProjet(id: number, project: projectInfo) {
    const candidateDelete: projectInfo = await projectRepository.getProjectInfo(id);

    if(!candidateDelete) throw { type: "Not Found", message:"This project doesn't exists anymore"}

    await projectRepository.updateProjet(id, project);
} 