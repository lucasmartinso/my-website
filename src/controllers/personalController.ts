import { Request, Response } from "express";

export async function sendEmail(req: Request, res: Response) {
    const emailInfo = req.body;

    res.status(200).send("Email enviado");
}