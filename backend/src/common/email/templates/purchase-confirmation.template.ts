import { buildEmailLayout } from '../email.factory';

export function purchaseConfirmationTemplate(customerName: string) {
  const content = `
    <h2>Compra recibida</h2>

    <p>Hola <strong>${customerName}</strong>,</p>

    <p>
      ¡Tu solicitud de compra fue recibida correctamente! ✨
    </p>

    <p>
      En breve validaremos tu transferencia para confirmar el pago. 
      Las compras realizadas antes de las 20:00 hrs suelen confirmarse el mismo día (aprox. 1 a 2 horas).
      Después de ese horario, la confirmación puede realizarse el siguiente día hábil.
    </p>

    <p>
      Una vez confirmado el pago, recibirás en este mismo correo los enlaces de descarga de tus ebooks.
    </p>

    <p>
      ¡Gracias por tu compra!
    </p>
  `;

  return buildEmailLayout(content);
}
