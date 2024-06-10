import { Request, Response } from "express";
import * as personalService from "../services/personalService";
import { loginInfo } from "../types/personalType";

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