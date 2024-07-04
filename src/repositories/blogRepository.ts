import { QueryResult } from "pg";
import connection from "../databases/postgres";
import { blogInfo } from "../types/blogType";

export async function getBlogs(): Promise<blogInfo[]> {
    const { rows: blogs }: QueryResult<blogInfo> = await connection.query(`
        SELECT id, tittle, description
        FROM "blog"
        ORDER BY id DESC    
    `)

    return blogs;
}

export async function getSelectBlog(): Promise<blogInfo[]> {
    const { rows: blogs }: QueryResult<blogInfo> = await connection.query(`
        SELECT id, tittle, description
        FROM "blog"  
        ORDER BY id DESC
        OFFSET 0 LIMIT 10
    `)

    return blogs;
}

export async function getBlogId(id: number): Promise<blogInfo[]> {
    const { rows: blogs }: QueryResult<blogInfo> = await connection.query(`
        SELECT * FROM "blog"  
        WHERE id = $1
    `,[id]);

    return blogs;
}

export async function getBlogTittle(tittle: string): Promise<blogInfo[]> {
    const { rows: blogs }: QueryResult<blogInfo> = await connection.query(`
        SELECT * FROM "blog"  
        WHERE tittle = $1
    `,[tittle]);

    return blogs;
}

export async function postBlog(blogData: Omit<blogInfo, 'id'>): Promise<void> {
    await connection.query(` 
        INSERT INTO "blog" 
        (tittle, description, text)  
        VALUES ($1,$2,$3)  
    `,[blogData.tittle,blogData.description,blogData.tittle]);
}

export async function updateBlog(id: number, blogData: Omit<blogInfo, 'id'>): Promise<void> {
    await connection.query(`
        UPDATE "blog" 
        SET tittle = $2, description = $3, text = $4
        WHERE id = $1   
    `,[id, blogData.tittle, blogData.description, blogData.text]);
}

export async function deleteBlog(id: number): Promise<void> {
    await connection.query(`
        DELETE FROM "blog" 
        WHERE id = $1    
    `,[id]);
}