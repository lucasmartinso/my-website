import { EnumObject, projectComplete, projectInfo, types } from "../types/projectType";
import * as projectRepository from "../repositories/projectRepository";
import * as technologyRepository from "../repositories/technologyRepository";
import { technology } from "../types/technologyType";

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

export async function getProjectType() {
    const types: EnumObject[] = await projectRepository.getTypes();
    console.log(types);

    return types;
}

export async function addProject(project: projectComplete): Promise<void> { 
    if(!project.technologies.length) throw { type: "Unprocessable Entity", message:"Necessário cadastrar ao menos uma tecnologia"}

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
    const projectId: projectInfo[] = await projectRepository.repeteadName(project.name);
    
    //adiciona as techIds associadas ao projedtId na tabela intermediaria 
    project.technologies.forEach(async tech => {
        let techId: technology[] = await technologyRepository.getTecnologyName(tech);

        if(!techId.length) {
            await technologyRepository.addTechnology(tech); 
            
            techId = await technologyRepository.getTecnologyName(tech);
        }
        
        await technologyRepository.addProjectTech(projectId[0].id, techId[0].id);
    });
} 

export async function deleteProject(id: number) {
    const candidateDelete: projectComplete[] = await projectRepository.getProjectInfo(id);
    if(!candidateDelete.length) throw { type: "Not Found", message:"Esse projeto já não existe mais"}
    
    await technologyRepository.deleteProjectWithTechs(id);
    await projectRepository.deleteProject(id);
} 

export async function updateProject(id: number, project: Omit<projectComplete, 'id'>) {
    const candidateUpdate: projectComplete[] = await projectRepository.getProjectInfo(id);

    if(!candidateUpdate.length) throw { type: "Not Found", message:"Esse projeto sofreu modificação ou não existe mais, pesquise-o novamente"}
    
    if(!project.technologies.length) throw { type: "Unprocessable Entity", message:"Necessário cadastrar ao menos uma tecnologia"}

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

    if(repeteadName.length && project.name !== candidateUpdate[0].name) throw { type: "Conflit", message: "Nome já existente"}
    if(repeteadUrl.length && project.url !== candidateUpdate[0].url) throw { type: "Conflit", message: "Url do deploy já existente"}
    if(repeteadFront.length && project.front !== candidateUpdate[0].front) throw { type: "Conflit", message: "Url do front já existente"}
    if(repeteadBack.length && project.back !== candidateUpdate[0].back) throw { type: "Conflit", message: "Url do back já existente"}
    
    // const exist: projectInfo[] = await projectRepository.verifyRepeteadFields(project);
    // if(exist) throw { type: "Conflit", message: "Campos nome, url, front ou back já existentes"}
    
    candidateUpdate[0].technologies.forEach(async tech => { 
        if(!project.technologies.some(e => e == tech)) {
            const techId: technology[] = await technologyRepository.getTecnologyName(tech);
            technologyRepository.deleteTechsOfProject(candidateUpdate[0].id, techId[0].id);  
        } 
    })
     
    project.technologies.forEach(async tech => {
        let techId: technology[] = await technologyRepository.getTecnologyName(tech);

        if(!techId.length) {
            await technologyRepository.addTechnology(tech); 
            techId = await technologyRepository.getTecnologyName(tech);
        } else if(!candidateUpdate[0].technologies.some(e => e == tech)) {
            await technologyRepository.addProjectTech(candidateUpdate[0].id, techId[0].id);
        }
    });

    await projectRepository.updateProject(id, project);
} 