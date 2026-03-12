export function buildEmailLayout(content: string) {
  const logoUrl =
    'https://juwzitrdvnizsrppklni.supabase.co/storage/v1/object/public/covers/logo.png';

  return `
  <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px;">
    <table width="100%" style="max-width:600px;margin:auto;background:white;border-radius:8px;padding:30px;">
      <tr>
        <td style="text-align:center;padding-bottom:20px;">
          <img 
            src="${logoUrl}" 
            alt="Reinnys Benitez"
            width="90"
            style="display:block;margin:0 auto;border:0;"
          />

          <h2 style="margin:10px 0 0 0;color:#cb86db;font-size:22px;">
            Reinnys Benitez
          </h2>
        </td>
      </tr>

      <tr>
        <td>
          ${content}
        </td>
      </tr>
      <tr>
        <td>
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
