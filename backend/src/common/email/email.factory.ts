export function buildEmailLayout(content: string) {
  return `
  <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px;">
    <table width="100%" style="max-width:600px;margin:auto;background:white;border-radius:8px;padding:30px;">
      <tr>
        <td>

          <h1 style="margin-top:0;color:#cb86db;">
            Reinnys Benitez
          </h1>

          ${content}

          <p style="margin-top:40px;font-size:12px;color:#888;">
            Si tienes problemas con los enlaces responde a este correo.
          </p>

        </td>
      </tr>
    </table>
  </div>
  `;
}
