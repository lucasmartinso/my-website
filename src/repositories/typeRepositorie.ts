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

export async function existType(id: number): Promise<ptype[]> {
    const { rows: existType }: QueryResult<ptype> = await connection.query(`
        SELECT * FROM "type"
        WHERE id = $1
    `,[id]); 

    return existType;
}

export async function postType(name: string): Promise<void> {
    await connection.query(`
        INSERT INTO "type" (name) 
        VALUES ($1)
    `,[name]); 
}

export async function deleteType(id: number): Promise<void> {
    await connection.query(`
        DELETE FROM "type"
        WHERE id = $1
    `,[id]); 
}

export async function updateType(id: number, name: string): Promise<void> {
    await connection.query(`
        UPDATE "type"
        SET name = $2
        WHERE id = $1
    `,[id,name]); 
}