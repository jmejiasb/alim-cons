import {
  adminNotificationTemplate,
  purchaseConfirmationTemplate,
  downloadLinksTemplate,
} from './src/common/email/templates';
import { writeFileSync } from 'fs';

const admin = adminNotificationTemplate('Juan Perez', 'juan@test.com', [
  {
    ebook: { title: 'Organízate para cuidarte' } as any,
    priceAtPurchase: 12990,
  },
] as any);

const confirmation = purchaseConfirmationTemplate('Juan Perez');

const downloads = downloadLinksTemplate('Juan Perez', [
  {
    title: 'Organízate para cuidarte',
    url: 'https://example.com/download',
  },
]);

const html = `
  <html>
  <head>
    <meta charset="utf-8"/>
    <title>Email Templates Preview</title>
  </head>
  <body style="font-family: Arial; padding:40px">

  <h1>Admin Notification</h1>
  ${admin}

  <hr/>

  <h1>Purchase Confirmation</h1>
  ${confirmation}

  <hr/>

  <h1>Download Links</h1>
  ${downloads}

  </body>
  </html>
`;

writeFileSync('email-preview.html', html);
console.log('email-preview.html generated');
