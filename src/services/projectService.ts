import * as projectRepository from "../repositories/projectRepository";
import { EnumObject, projectComplete, projectInfo } from "../types/projectType";

export async function getProjects(type: any | undefined): Promise<projectInfo[]> { 
    let projects: projectInfo[];

    if(!type) {
        projects = await projectRepository.getProjects();
        if(!projects.length) throw { type: "Not Found", message:"Nenhum projeto encontrado na base de dados"}
    } else { 
        const types: EnumObject[] = await projectRepository.getTypes();
        if(!types.some((str: EnumObject) => str.enumlabel == type)) throw { type: "Bad Request", message:"Tipo inexistente"} 
        
        projects = await projectRepository.getProjectsType(type);
        if(!projects.length) throw { type: "Not Found", message:"Nenhum projeto registrado com esse tipo ainda"}
    }
    
    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> {
    const projectsPinned: projectInfo[] = await projectRepository.getPinnedProjects(); 

    if(!projectsPinned.length) throw { type: "Not Found", message:"Nenhum projeto 'pinado' registrado na base de dados ainda"}

    return projectsPinned;
} 
 
export async function getProjectInfo(id: number): Promise<projectComplete> {
    const projectInfos: projectComplete[] = await projectRepository.getProjectInfo(id);

    if(!projectInfos.length) throw { type: "Not Found", message:"Esse projeto não existe"}

    return projectInfos[0];
} 

export async function addProject(project: projectInfo): Promise<void> {
    await projectRepository.addProject(project);
} 

export async function deleteProject(id: number) {
    const candidateDelete: projectInfo[] = await projectRepository.getProjectInfo(id);

    if(!candidateDelete.length) throw { type: "Not Found", message:"Esse projeto já não existe mais"}
    
    await projectRepository.deleteProject(id);
} 

export async function updateProjet(id: number, project: projectInfo) {
    const candidateUpdate: projectInfo[] = await projectRepository.getProjectInfo(id);

    if(!candidateUpdate.length) throw { type: "Not Found", message:"Esse projeto sofreu modificação, pesquise-o novamente"}

    await projectRepository.updateProjet(id, project);
} 