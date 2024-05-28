import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function sendMail(emailInfo: any): Promise<void> {
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

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
    });
}