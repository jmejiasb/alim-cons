import nodemailer from 'nodemailer';
import { EmailService } from './email.service';

jest.mock('nodemailer', () => ({
  __esModule: true,
  default: {
    createTransport: jest.fn(),
  },
}));

describe('EmailService', () => {
  let service: EmailService;
  let sendMailMock: jest.Mock;

  beforeEach(() => {
    process.env.SMTP_HOST = 'smtp.test.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'smtp@test.com';
    process.env.SMTP_PASS = 'secret';
    process.env.ADMIN_EMAIL = 'admin@test.com';

    sendMailMock = jest.fn().mockResolvedValue(undefined);

    (nodemailer.createTransport as jest.Mock).mockReturnValue({
      sendMail: sendMailMock,
    });

    service = new EmailService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('sendEmail', () => {
    it('should call transporter.sendMail with the correct payload', async () => {
      await service.sendEmail(
        'customer@test.com',
        'Test subject',
        '<p>Hello</p>',
      );

      expect(sendMailMock).toHaveBeenCalledTimes(1);
      expect(sendMailMock).toHaveBeenCalledWith({
        from: 'smtp@test.com',
        to: 'customer@test.com',
        subject: 'Test subject',
        html: '<p>Hello</p>',
      });
    });
  });

  describe('sendTestEmail', () => {
    it('should send the SMTP test email to the SMTP user', async () => {
      const sendEmailSpy = jest
        .spyOn(service, 'sendEmail')
        .mockResolvedValue(undefined);

      await service.sendTestEmail();

      expect(sendEmailSpy).toHaveBeenCalledTimes(1);
      expect(sendEmailSpy).toHaveBeenCalledWith(
        'smtp@test.com',
        'SMTP test',
        '<p>SMTP working</p>',
      );
    });
  });

  describe('sendPurchaseNotificationToAdmin', () => {
    it('should send the admin notification email', async () => {
      const sendEmailSpy = jest
        .spyOn(service, 'sendEmail')
        .mockResolvedValue(undefined);

      const items = [
        {
          ebook: {
            title: 'Clean Code',
          },
          priceAtPurchase: 15,
        },
      ];

      await service.sendPurchaseNotificationToAdmin(
        'Ali',
        'ali@test.com',
        items as any,
      );

      const [to, subject, html] = sendEmailSpy.mock.calls[0];

      expect(to).toBe('admin@test.com');
      expect(subject).toBe('Nueva compra pendiente de verificación');
      expect(html).toContain('Ali');
      expect(html).toContain('ali@test.com');
      expect(html).toContain('Clean Code');
    });
  });

  describe('sendPurchaseConfirmationToCustomer', () => {
    it('should send the purchase confirmation email to the customer', async () => {
      const sendEmailSpy = jest
        .spyOn(service, 'sendEmail')
        .mockResolvedValue(undefined);

      await service.sendPurchaseConfirmationToCustomer('Ali', 'ali@test.com');

      expect(sendEmailSpy).toHaveBeenCalledTimes(1);
      expect(sendEmailSpy).toHaveBeenCalledWith(
        'ali@test.com',
        'Compra recibida',
        expect.stringContaining('Ali'),
      );
    });
  });

  describe('sendDownloadLinks', () => {
    it('should send the download links email to the customer', async () => {
      const sendEmailSpy = jest
        .spyOn(service, 'sendEmail')
        .mockResolvedValue(undefined);

      const downloads = [
        { title: 'Clean Code', url: 'https://download-1.com' },
        { title: 'Refactoring', url: 'https://download-2.com' },
      ];

      await service.sendDownloadLinks('Ali', 'ali@test.com', downloads);

      const [to, subject, html] = sendEmailSpy.mock.calls[0];

      expect(to).toBe('ali@test.com');
      expect(subject).toBe('Tus ebooks están listos');
      expect(html).toContain('Ali');
      expect(html).toContain('Clean Code');
      expect(html).toContain('https://download-1.com');
      expect(html).toContain('Refactoring');
      expect(html).toContain('https://download-2.com');
    });
  });

  describe('sendContactNotification', () => {
    it('should send the contact notification to admin email', async () => {
      const sendEmailSpy = jest
        .spyOn(service, 'sendEmail')
        .mockResolvedValue(undefined);

      const mockInput = {
        name: 'Ali',
        email: 'ali@test.com',
        phone: '+569123456789',
        message: 'Test',
      };

      await service.sendContactNotificationToAdmin(mockInput);

      const [to, subject, html] = sendEmailSpy.mock.calls[0];

      expect(to).toBe('admin@test.com');
      expect(subject).toBe('Nuevo mensaje de contacto');
      expect(html).toContain('Ali');
      expect(html).toContain('ali@test.com');
      expect(html).toContain('+569123456789');
      expect(html).toContain('Test');
    });
  });
});
