import { EnumObject, projectComplete, projectInfo } from "../types/projectType";
import * as projectRepository from "../repositories/projectRepository";
import * as technologyRepository from "../repositories/technologyRepository";

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
    const [
        repeteadName, 
        repeteadUrl, 
        repeteadFront, 
        repeteadBack
    ]: any = await Promise.all([
        projectRepository.repeteadName(project.name), 
        projectRepository.repeteadUrl(project.url),
        projectRepository.repeteadFront(project.front),
        projectRepository.repeteadBack(project.back)
    ])

    if(repeteadName.length) throw { type: "Conflit", message: "Nome já existente"}
    if(repeteadUrl.length) throw { type: "Conflit", message: "Url do deploy já existente"}
    if(repeteadFront.length) throw { type: "Conflit", message: "Url do front já existente"}
    if(repeteadBack.length) throw { type: "Conflit", message: "Url do back já existente"}

    // const exist: projectInfo[] = await projectRepository.verifyRepeteadFields(project);
    // if(exist) throw { type: "Conflit", message: "Campos nome, url, front ou back já existentes"}

    await projectRepository.addProject(project);
} 

export async function deleteProject(id: number) {
    const candidateDelete: projectComplete[] = await projectRepository.getProjectInfo(id);
    console.log(candidateDelete);
    if(!candidateDelete.length) throw { type: "Not Found", message:"Esse projeto já não existe mais"}
    
    await technologyRepository.deleteProjectTechs(id);
    await projectRepository.deleteProject(id);
} 

export async function updateProjet(id: number, project: projectInfo) {
    const candidateUpdate: projectInfo[] = await projectRepository.getProjectInfo(id);

    if(!candidateUpdate.length) throw { type: "Not Found", message:"Esse projeto sofreu modificação ou não existe mais, pesquise-o novamente"}

    const [
        repeteadName, 
        repeteadUrl, 
        repeteadFront, 
        repeteadBack
    ]: any = await Promise.all([
        projectRepository.repeteadName(project.name), 
        projectRepository.repeteadUrl(project.url),
        projectRepository.repeteadFront(project.front),
        projectRepository.repeteadBack(project.back)
    ])

    if(!repeteadName.length) throw { type: "Conflit", message: "Nome já existente"}
    if(!repeteadUrl.length) throw { type: "Conflit", message: "Url do deploy já existente"}
    if(!repeteadFront.length) throw { type: "Conflit", message: "Url do front já existente"}
    if(!repeteadBack.length) throw { type: "Conflit", message: "Url do back já existente"}
    
    // const exist: projectInfo[] = await projectRepository.verifyRepeteadFields(project);
    // if(exist) throw { type: "Conflit", message: "Campos nome, url, front ou back já existentes"}

    await projectRepository.updateProjet(id, project);
} 