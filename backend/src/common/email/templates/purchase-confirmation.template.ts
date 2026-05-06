import { buildEmailLayout } from '../email.factory';

export function purchaseConfirmationTemplate(customerName: string) {
  const content = `
    <h2>Compra recibida</h2>

    <p>Hola <strong>${customerName}</strong>,</p>

    <p>
      Hemos recibido tu solicitud de compra correctamente. En breve revisaremos la transferencia para confirmar el pago.
    </p>

    <p>
      Las compras realizadas dentro del horario de atención se confirman normalmente durante el mismo día, generalmente dentro de 1 a 2 horas.
    </p>
    
    <p>
      Si realizaste la transferencia después de las 20:00 hrs (hora chile), es posible que la confirmación se realice al día hábil siguiente.
    </p>

    <p>
      Una vez confirmado el pago, recibirás en este mismo correo los enlaces de descarga de tus ebooks.
    </p>

    <p>
      Gracias por tu compra.
    </p>
  `;

  return buildEmailLayout(content);
}
