import { QueryResult } from "pg";
import connection from "../databases/postgres"; 
import { projectInfo } from "../types/projectType";

export async function getProjects(): Promise<projectInfo[]> {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project"
    `); 

    return projects;
} 

export async function getProjectsType(type: string): Promise<projectInfo[]> {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project"
        WHERE "type" = $1
    `,[type]); 

    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> { 
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE "pinned" = true
    `);

    return projects;
} 

//concertar esse type any
export async function getProjectInfo(id: number): Promise<projectInfo> {
    const { rows: project }: any = await connection.query(`
        SELECT * FROM "project" 
        WHERE "id" = $1
    `,[id]);

    return project;
} 

export async function addProject(project: projectInfo): Promise<void> {
    await connection.query(`
        INSERT INTO "project"
        (name, type, image, description, url, documentation, front, back, pinned) 
        VALUES(${project.name},${project.type},${project.image},${project.description},${project.url},${project.documentation},${project.front},${project.back},${project.back})
    `); 
} 