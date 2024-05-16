import { QueryResult } from "pg";
import connection from "../databases/postgres"; 
import { projectInfo, types } from "../types/projectType";

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

export async function deleteProject(id: number) {
    await connection.query(`
        DELETE FROM "project" 
        WHERE id = $1
    `,[id]);
} 

export async function updateProjet(id: number, name: string | undefined, type: types | undefined, image: string | undefined, description: string | undefined, url: string | undefined, documentation: string | undefined, front: string | undefined, back: string | undefined, pinned: string | undefined) {
    await connection.query(`
        UPDATE "project" 
        SET name = $2, type = $3, image = $4, url = $5, documentation = $6, front = $7, back = $8, pinned = $9
        WHERE id = $1
    `,[id, name, type, image, description, url, documentation, front, back, pinned])
}