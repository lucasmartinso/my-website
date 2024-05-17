import { QueryResult } from "pg";
import connection from "../databases/postgres";
import { technology } from "../types/technologyType";

export async function getTecnologies(): Promise<technology[]> {
    const { rows: technologies }: QueryResult<technology> = await connection.query(`
        SELECT * FROM "technology"
    `); 

    return technologies;
} 

export async function getTecnologyName(name: string): Promise<technology[]> {
    const { rows: technologies }: QueryResult<technology> = await connection.query(`
        SELECT * FROM "technology"
        WHERE name = $1
    `,[name]); 

    return technologies; 
}

export async function getTecnologyId(id: number): Promise<technology[]> {
    const { rows: technologies }: QueryResult<technology> = await connection.query(`
        SELECT * FROM "technology"
        WHERE id = $1
    `,[id]); 

    return technologies; 
}

export async function addTechnology(technology: technology): Promise<void> {
    await connection.query(`
        INSERT INTO "technology" (name)
        VALUES ($1)
    `,[technology.name]);
}

export async function deleteTechnology(id: number): Promise<void> {
    await connection.query(`
        DELETE FROM "technology" 
        WHERE id = $1
    `,[id])
} 

export async function updateTechnology(id: number, technology: technology): Promise<void> {
    await connection.query(`
        UPDATE technology 
        SET name = $2
        WHERE id = $1
    `,[id, technology.name]);
}

export async function addProjectTech(projectId: number, techId: number): Promise<void> {
    await connection.query(`
        INSERT INTO "projectTecnologies" 
        ("projectId", "technologyId")
        VALUES ($1, $2)
    `,[projectId, techId]);
}

export async function deleteProjectWithTechs(projectId: number) {
    await connection.query(`
        DELETE FROM "projectTechnologies"
        WHERE "projectId" = $1
    `,[projectId])
}

export async function deleteTechsOfProject(projectId: number, techId: number) {
    await connection.query(`
        DELETE FROM "projectTechnologies"
        WHERE "projectId" = $1 AND "technologyId" = $2
    `,[projectId,techId])
}