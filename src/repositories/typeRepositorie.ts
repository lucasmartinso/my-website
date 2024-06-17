import { QueryResult } from "pg";
import connection from "../databases/postgres";

export async function getTypes() {
    const { rows: types } = await connection.query(`
        SELECT * FROM type
    `) 

    return types;
}