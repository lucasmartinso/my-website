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
        subject: emailInfo.subject,
        html: `
            <h2>Email enviado por ${emailInfo.email}</h2>
            <p>${emailInfo.text}</p>
            `
    };

    await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          throw { type: "Bad Request", message: `Erro: ${error}` }
        } else {
            console.log('Email sent:', info.response);
        }
    });

    const responseRequest = {
        from: process.env.EMAIL,
        to: emailInfo.email,
        subject: 'Seu email foi enviado, já te respondo :)',
        html: `<h2>Olá, tudo bem com você?</h2>
               <p>Esse aqui é um email automático, só pra te avisar que já já vou responder o email que você me enviou, ok? :) </p>       
               <p>Att, Lucas Martins Oliveira</p>
            `
    };

    await transport.sendMail(responseRequest, (error, info) => {
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
    } else { 
        throw { type: "Unauthorized", message: `Não autorizado, email ou senha incompatíveis` }
    }
}