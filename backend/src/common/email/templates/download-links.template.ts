import { buildEmailLayout } from '../email.factory';

export function downloadLinksTemplate(
  customerName: string,
  downloads: { title: string; url: string }[],
) {
  const links = downloads
    .map(
      (d) => `
      <p>
        <a href="${d.url}" 
           style="
             display:inline-block;
             padding:12px 20px;
             background:#cb86db;
             color:white;
             text-decoration:none;
             border-radius:6px;
             font-weight:bold;
           ">
           Descargar ${d.title}
        </a>
      </p>
    `,
    )
    .join('');

  const content = `
    <h2>Tu compra fue confirmada</h2>

    <p>Hola <strong>${customerName}</strong>,</p>

    <p>
      Tu pago fue confirmado. Puedes descargar tus ebooks aquí:
    </p>

    ${links}

    <p style="font-size:13px;color:#888;">
      Estos enlaces expirarán en 24 horas.
    </p>
  `;

  return buildEmailLayout(content);
}
