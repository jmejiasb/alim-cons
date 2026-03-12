import { writeFileSync } from 'fs';
import { adminNotificationTemplate } from './admin-notification.template';

const mockPurchase = {
  name: 'Juan Perez',
  email: 'juan@test.com',
  items: [
    {
      priceAtPurchase: 12.99,
      ebook: { title: 'Organízate para cuidarte' },
    },
    {
      priceAtPurchase: 9.99,
      ebook: { title: 'Segundo ebook' },
    },
  ],
} as any;

const html = adminNotificationTemplate(
  mockPurchase.name,
  mockPurchase.email,
  mockPurchase.items,
);

writeFileSync('email-preview.html', html);
