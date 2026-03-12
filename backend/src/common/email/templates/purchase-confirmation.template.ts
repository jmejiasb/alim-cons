import { buildEmailLayout } from '../email.factory';

export function purchaseConfirmationTemplate(customerName: string) {
  const content = `
    <h2>Compra recibida</h2>

    <p>Hola <strong>${customerName}</strong>,</p>

    <p>
      Hemos recibido tu solicitud de compra correctamente.
    </p>

    <p>
      Una vez confirmemos la transferencia recibirás los enlaces de descarga.
    </p>
  `;

  return buildEmailLayout(content);
}
