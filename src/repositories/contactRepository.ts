import { ContactFormData } from "@/schemas/contactSchema";

export async function postContactData(data: ContactFormData): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 300))

  console.log("Message sent:", data);

  return Promise.resolve()
}