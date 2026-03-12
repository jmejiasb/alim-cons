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

          <footer style="margin-top:40px;padding-top:20px;border-top:1px solid #eee;font-size:12px;color:#888;text-align:center;">
            <p style="margin:0;">
              © ${new Date().getFullYear()} Reinnys Benitez
            </p>

            <p style="margin:6px 0 0 0;">
              Este es un correo automático, por favor no respondas a este mensaje.
            </p>
          </footer>
        </td>
      </tr>
    </table>
  </div>
  `;
}
