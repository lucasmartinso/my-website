import connection from "../databases/postgres"; 
import { projectInfo } from "../types/projectType";
import dotenv from "dotenv";
dotenv.config();

export async function addProject(project: projectInfo): Promise<void> {
    await connection.query(`
        INSERT INTO "project"
        (name, type, image, description, url, documentation, front, back, pinned) 
        VALUES(${project.name},${project.type},${project.image},${project.description},${project.url},${project.documentation},${project.front},${project.back},${project.back})
    `); 
} 

export async function getProjects(): Promise<any> {
    const { rows: projects }: any = await connection.query(`
        SELECT * FROM "project"
    `); 

    console.log(projects);
    return projects;
}