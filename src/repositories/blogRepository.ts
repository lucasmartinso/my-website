import connection from "../databases/postgres";

export async function getBlogs(): Promise<mkcdmkcd> {
    const { rows: blogs } = await connection.query(`
        SELECT * FROM "blog"    
    `)

    return blogs;
}

export async function postBlog(params:type) {
    
}

export async function updateBlog(params:type) {
    
}

export async function deleteBlog(id: number): Promise<void> {
    connection
}