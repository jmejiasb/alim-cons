// test-smtp.ts
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

async function main() {

  const options: SMTPTransport.Options = {
    host: "smtp.gmail.com",
		port: 587,
		secure: false,
		requireTLS: true,
		connectionTimeout: 10_000,
		greetingTimeout: 10_000,
		socketTimeout: 10_000,
		auth: {
			user: process.env.SMTP_USER!,
			pass: process.env.SMTP_PASS!,
		},
  }

  const transporter = nodemailer.createTransport(options);

	await transporter.verify();

  await transporter.sendMail({
    from: process.env.SMTP_USER!,
    to: process.env.SMTP_USER!,
    subject: "SMTP test",
    html: "<p>SMTP is working</p>",
  });

  console.log("SMTP working");
}

main().catch((error) => {
  console.error("SMTP failed:", error);
  process.exit(1);
});