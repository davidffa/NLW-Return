import { MailAdapter, SendMailData } from '../MailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5d53daf2dc8f23",
    pass: "52c0d28f90dbce"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <suporte@feedget.com>',
      to: 'David <test@gmail.com>',
      subject,
      html: body
    });
  }
}