import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const Authorization = req.headers.authorization;
    const token = Authorization?.replace("Bearer ", "");

    if(!token) throw { type: "Unauthorized", message: "Acesso bloqueado, autorização necessária"} 

    try {
        const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
        const { email } = jwt.verify(token,SECRET) as { email: string }
        if(email !== process.env.AUTH_EMAIL) { 
            throw { type: "Unauthorized", message: "Acesso bloqueado, autorização necessária"};
        }
        next();
    } catch (error) {
        throw { type: "Unauthorized", message: "Acesso bloqueado, autorização necessária"};
    }
}