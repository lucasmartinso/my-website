import { QueryResult } from "pg";
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

export async function getProjects(): Promise<projectInfo[]> {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project"
    `); 

    return projects;
} 

export async function getProjectsType(type: string) {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project"
        WHERE "type" = 'web'
    `); 

    return projects;
}

export async function getPinnedProjects() { 
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE "pinned" = true
    `);

    return projects;
}