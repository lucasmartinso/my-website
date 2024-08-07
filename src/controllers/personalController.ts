import { Request, Response } from "express";
import * as personalService from "../services/personalService";
import { loginInfo } from "../types/personalType";
import connection from "../databases/postgres";

export async function sendEmail(req: Request, res: Response): Promise<void> {
    const emailInfo = req.body;

    await personalService.sendMail(emailInfo);

    res.status(200).send("Email enviado");
}

export async function login(req: Request, res: Response): Promise<void> {
    const loginData: loginInfo = req.body; 

    const token: string = await personalService.login(loginData);

    res.status(200).send({token});
}

export async function validateAuth(req: Request, res: Response): Promise<void> {
    res.status(202).send("Token válido!!");
}

// export async function creation(req: Request, res: Response): Promise<void> {
//     try {
//         await connection.query(`
//             CREATE TABLE type (
//                 id SERIAL PRIMARY KEY,
//                 name VARCHAR(255) UNIQUE
//             );
            
//             CREATE TABLE technology (
//                 id SERIAL PRIMARY KEY, 
//                 name VARCHAR(255) UNIQUE NOT NULL
//             );

//             CREATE TABLE "project"(
//                 "id" SERIAL PRIMARY KEY,
//                 "name" VARCHAR(100) NOT NULL,
//                 "typeId" INTEGER NOT NULL REFERENCES "type"("id"),
//                 "image" TEXT NOT NULL,
//                 "description" TEXT NOT NULL,
//                 "url" TEXT NULL,
//                 "documentation" TEXT NOT NULL,
//                 "front" VARCHAR(255) NULL,
//                 "back" VARCHAR(255) NULL,
//                 "pinned" BOOLEAN NOT NULL
//             ); 
            
//             CREATE TABLE "projectTechnologies" (
//                 "id" SERIAL PRIMARY KEY,
//                 "projectId" INTEGER NOT NULL REFERENCES "project"("id"),
//                 "technologyId" INTEGER NOT NULL REFERENCES "technology"("id")
//             );

//             CREATE TABLE blog (
//                  id SERIAL PRIMARY KEY,
//                  tittle TEXT UNIQUE NOT NULL, 
//                  description TEXT NOT NULL, 
//                  "text" TEXT NOT NULL
//              );
//         `);
//     } catch (error) {
//         console.log(error);
//         res.status(401).send(error);
//     }

//     res.status(200).send("Tabelas criadas");
// }

// export async function creation(req: Request, res: Response): Promise<void> { 
//     await connection.query(`

//     `);
    
//     res.status(200).send("Blog criado");
// }