import connection from "../databases/postgres";

export async function getTecnologies() {
    const { rows: technologies } = await connection.query(`
        SELECT * FROM "technology"
    `); 


}