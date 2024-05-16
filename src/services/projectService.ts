import * as projectRepository from "../repositories/projectRepository";
import { projectInfo } from "../types/projectType";

export async function getProjects(type: string | undefined): Promise<projectInfo[]> { 
    let projects: projectInfo[];

    if(!type) {
        projects = await projectRepository.getProjects();
        if(!projects.length) throw { type: "Not Found", message:"Nenhum projeto encontrado na base de dados"}
    } else { 
        if(type !== 'web' && type !== 'notebook') throw { type: "Unprocessable Entity", message:"Tipo inexistente"} 
        projects = await projectRepository.getProjectsType(type);
        if(!projects.length) throw { type: "Not Found", message:"Nenhum projeto registrado com esse tipo ainda"}
    }
    
    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> {
    const projectsPinned: projectInfo[] = await projectRepository.getPinnedProjects(); 

    if(!projectsPinned.length) throw { type: "Not Found", message:"Nenhum projeto registrado na base de dados ainda"}

    return projectsPinned;
} 

//alterar pra voltar com as tecnologias do projeto 
export async function getProjectInfo(id: number): Promise<projectInfo> {
    const projectInfos: projectInfo = await projectRepository.getProjectInfo(id);

    if(!projectInfos) throw { type: "Not Found", message:"Esse projeto não existe"}

    return projectInfos;
} 

export async function addProject(project: projectInfo): Promise<void> {
    
    await projectRepository.addProject(project);
} 

export async function deleteProject(id: number) {
    const candidateDelete: projectInfo = await projectRepository.getProjectInfo(id);

    if(!candidateDelete) throw { type: "Not Found", message:"Esse projeto já não existe mais"}
    
    await projectRepository.deleteProject(id);
} 

//regex project
export async function updateProjet(id: number, project: projectInfo) {
    const candidateDelete: projectInfo = await projectRepository.getProjectInfo(id);

    if(!candidateDelete) throw { type: "Not Found", message:"Esse projeto sofreu modificação, pesquise-o novamente"}

    await projectRepository.updateProjet(id, project);
} 