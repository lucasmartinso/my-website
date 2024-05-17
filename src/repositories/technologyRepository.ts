import { QueryResult } from "pg";
import connection from "../databases/postgres";
import { technology } from "../types/technologyType";

export async function getTecnologies(): Promise<technology[]> {
    const { rows: technologies }: QueryResult<technology> = await connection.query(`
        SELECT * FROM "technology"
    `); 

    return technologies;
} 

export async function getTecnologyName(name: string) {
    const { rows: technologies }: QueryResult<technology> = await connection.query(`
        SELECT * FROM "technology"
        WHERE name = $1
    `,[name]); 

    return technologies; 
}

export async function addTechnology(technology: technology) {
    await connection.query(`

    `)
}

//export async function updateProjectTech(name: string, )

export async function deleteProjectTechs(projectId: number) {
    await connection.query(`
        DELETE FROM "projectTechnologies"
        WHERE "projectId" = $1
    `,[projectId])
}