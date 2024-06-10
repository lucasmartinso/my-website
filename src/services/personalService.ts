import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { loginInfo, mailInfo } from "../types/personalType";
import jwt from "jsonwebtoken";
dotenv.config();

export async function sendMail(emailInfo: mailInfo): Promise<void> {
    const transport = nodemailer.createTransport({ 
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth : {
            user: process.env.EMAIL, 
            pass: process.env.EMAIL_PASSWORD,
        }
    }); 

    const mailOptions = {
        from: emailInfo.email,
        to: process.env.EMAIL,
        subject: emailInfo.email,
        text: emailInfo.text
    };

    console.log(mailOptions);

    await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          throw { type: "Bad Request", message: `Erro: ${error}` }
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

export async function login(loginData: loginInfo) {
    if(loginData.email === process.env.AUTH_EMAIL && loginData.password === process.env.AUTH_PASSWORD) { 
        const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
        const EXPERIES_IN: string | undefined = process.env.EXPERIES_IN; 
    
        const payload: object = { 
            userId: Math.floor(Math.random() * 1001),
            email: loginData.email, 
            level: 1
        }

        const jwtConfig: object = { 
            expiresIn: EXPERIES_IN
        }

        const token: string = jwt.sign(payload,SECRET,jwtConfig);

        return token;
    }
}