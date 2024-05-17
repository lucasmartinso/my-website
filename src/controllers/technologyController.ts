import { Request, Response } from "express";

export async function getTechnologies(req: Request, res: Response): Promise<void> { 
    const technologies = 1;

    res.status(200).send(technologies);
}