import { Request, Response } from "express";
import * as personalService from "../services/personalService";

export async function sendEmail(req: Request, res: Response) {
    const emailInfo = req.body;

    await personalService.sendMail(emailInfo);

    res.status(200).send("Email enviado");
}