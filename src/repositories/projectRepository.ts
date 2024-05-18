import { QueryResult } from "pg";
import connection from "../databases/postgres"; 
import { EnumObject, projectComplete, projectInfo, types } from "../types/projectType";

export async function getProjects(): Promise<projectInfo[]> {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT id, name, type, image, url, pinned 
        FROM "project"
    `); 

    return projects;
} 

export async function getProjectsType(type: string): Promise<projectInfo[]> {
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT id, name, type, image, url, pinned 
        FROM "project"
        WHERE "type" = $1
    `,[type]); 

    return projects;
}

export async function getPinnedProjects(): Promise<projectInfo[]> { 
    const { rows: projects }: QueryResult<projectInfo> = await connection.query(`
        SELECT id, name, type, image, url, pinned 
        FROM "project" 
        WHERE "pinned" = $1
    `,[true]);
    
    return projects;
} 

export async function getProjectInfo(id: number): Promise<projectComplete[]> {
    const { rows: project }: QueryResult<projectComplete> = await connection.query(`
        SELECT p.*, json_agg(t.name) AS technologies
        FROM "project" p 
        JOIN "projectTechnologies" pt ON p.id = pt."projectId"
        JOIN "technology" t ON t.id = pt."technologyId"
        WHERE p."id" = $1
        GROUP BY p."id"
    `,[id]);

    return project;
} 

// export async function verifyRepeteadFields(project: projectInfo): Promise<projectInfo[]> {
//     const { rows: exist }: QueryResult<projectInfo> = await connection.query(`
//         SELECT * FROM "project" 
//         WHERE name = $1 OR  url = $2 OR front = $3 OR back $4
//     `,[project.name, project.url, project.front, project.back]);
    
//     return exist;
// }

export async function repeteadName(name: string): Promise<projectInfo[]> {
    const { rows: existName }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE name = $1
    `,[name]);
    
    return existName;
}

export async function repeteadUrl(url: string | null): Promise<projectInfo[]> {
    const { rows: existUrl }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE url = $1 AND url <> $2
    `,[url,null]);
    
    return existUrl;
}

export async function repeteadFront(front: string | null): Promise<projectInfo[]> {
    const { rows: existFront }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE front = $1
    `,[front]);
    
    return existFront;
}

export async function repeteadBack(back: string | null): Promise<projectInfo[]> {
    const { rows: existBack }: QueryResult<projectInfo> = await connection.query(`
        SELECT * FROM "project" 
        WHERE back = $1
    `,[back]);
    
    return existBack;
}

export async function addProject(project: projectComplete): Promise<void> {
    await connection.query(`
        INSERT INTO "project"
        (name, type, image, description, url, documentation, front, back, pinned) 
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
    `,[project.name,project.type,project.image,project.description,project.url,project.documentation,project.front,project.back,project.pinned]); 
} 

export async function deleteProject(id: number) {
    await connection.query(`
        DELETE FROM "project" 
        WHERE id = $1
    `,[id]);
} 

export async function updateProjet(id: number, project: projectComplete) {
    await connection.query(`
        UPDATE "project" 
        SET name = $2, type = $3, image = $4, description = $5, url = $6, documentation = $7, front = $8, back = $9, pinned = $10
        WHERE id = $1
    `,[id, project.name, project.type, project.image, project.description, project.url, project.documentation, project.front, project.back, project.pinned])
}

export async function getTypes() { 
    const { rows: oid }: any = await connection.query(`
        SELECT oid, typname
        FROM pg_type
        WHERE typcategory = 'E' AND typname = 'type_project';
    `);

    const { rows: enumTypes }: QueryResult<EnumObject> = await connection.query(`
        SELECT enumlabel
        FROM pg_enum
        WHERE enumtypid = $1;
    `,[oid[0].oid]);
    
    return enumTypes;
}