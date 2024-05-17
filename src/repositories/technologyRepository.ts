import connection from "../databases/postgres";

export async function getTecnologies() {
    const { rows: technologies } = await connection.query(`
        SELECT * FROM "technology"
    `); 
} 

export async function deleteProjectTechs(projectId: number) {
    await connection.query(`
        DELETE FROM "projectTechnologies"
        WHERE "projectId" = $1
    `,[projectId])
}