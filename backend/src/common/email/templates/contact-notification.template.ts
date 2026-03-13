import { formatCLP } from 'src/common/utils/formatCLP';
import { buildEmailLayout } from '../email.factory';
import { CreateContactInput } from 'src/contact/dto/create-contact.input';

export function contactNotificationTemplate(input: CreateContactInput) {
  const content = `
    <h2>Nuevo mensaje de contacto</h2>

    <p><strong>Nombre:</strong> ${input.name}</p>
    <p><strong>Email:</strong> ${input.email}</p>
    <p><strong>Telefono:</strong> ${input.phone ?? ''}
    <p><strong>Mensaje:</strong></p>
    <p>${input.message}</p>
    <p><strong>
  `;

  return buildEmailLayout(content);
}
