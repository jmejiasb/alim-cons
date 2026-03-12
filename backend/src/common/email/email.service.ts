import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import {
  adminNotificationTemplate,
  downloadLinksTemplate,
  purchaseConfirmationTemplate,
} from './templates';
import { PurchaseItem } from 'src/purchases/purchase-item.entity';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  async sendEmail(to: string, subject: string, html: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER!,
      to,
      subject,
      html,
    });
  }

  async sendTestEmail() {
    await this.sendEmail(
      process.env.SMTP_USER!,
      'SMTP test',
      '<p>SMTP working</p>',
    );
  }

  async sendPurchaseNotificationToAdmin(
    customerName: string,
    customerEmail: string,
    items: PurchaseItem[],
  ) {
    const html = adminNotificationTemplate(customerName, customerEmail, items);

    await this.sendEmail(
      process.env.ADMIN_EMAIL!,
      'Nueva compra pendiente de verificación',
      html,
    );
  }

  async sendPurchaseConfirmationToCustomer(
    customerEmail: string,
    customerName: string,
  ) {
    const html = purchaseConfirmationTemplate(customerName);
    await this.sendEmail(customerEmail, 'Compra recibida', html);
  }

  async sendDownloadLinks(
    customerEmail: string,
    customerName: string,
    downloads: { title: string; url: string }[],
  ) {
    const html = downloadLinksTemplate(customerName, downloads);

    await this.sendEmail(customerEmail, 'Tus ebooks están listos', html);
  }
}
