import { QueryResult } from "pg";
import connection from "../databases/postgres";
import { ptype } from "../types/typeType";

export async function getTypes(): Promise<ptype[]> {
    const { rows: types }: QueryResult<ptype> = await connection.query(`
        SELECT * FROM "type"
    `); 

    return types;
}

export async function existNameType(type: string): Promise<ptype[]> {
    const { rows: existName }: QueryResult<ptype> = await connection.query(`
        SELECT * FROM "type"
        WHERE name = $1
    `,[type]); 

    return existName;
}

export async function postType(name: string): Promise<void> {
    await connection.query(`
        INSERT INTO "type" (name) 
        VALUES ($1)
    `,[name]); 
}