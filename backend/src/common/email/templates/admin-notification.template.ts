import { formatCLP } from 'src/common/utils/formatCLP';
import { buildEmailLayout } from '../email.factory';
import { PurchaseItem } from 'src/purchases/purchase-item.entity';

export function adminNotificationTemplate(name: string, email: string, items: PurchaseItem[]) {
  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.priceAtPurchase),
    0,
  );

  const rows = items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 0;">
          ${item.ebook.title}
        </td>

        <td style="text-align:right;">
          ${formatCLP(item.priceAtPurchase)}
        </td>
      </tr>
    `,
    )
    .join('');

  const content = `
    <h2>Nueva compra pendiente</h2>

    <p><strong>Cliente:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <table width="100%" style="margin-top:20px;border-collapse:collapse;">
      ${rows}

      <tr>
        <td style="border-top:1px solid #ddd;padding-top:10px;">
          <strong>Total</strong>
        </td>

        <td style="border-top:1px solid #ddd;padding-top:10px;text-align:right;">
          <strong>${formatCLP(subtotal)}</strong>
        </td>
      </tr>
    </table>
  `;

  return buildEmailLayout(content);
}
