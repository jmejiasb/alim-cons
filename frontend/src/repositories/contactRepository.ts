import type { ContactFormData } from "@/schemas/contactSchema";
import { gqlClient } from "@/lib/graphql-client";
import { CREATE_CONTACT } from "@/queries/contact";

export async function createContact(input: ContactFormData): Promise<ContactFormData> {
  const data = await gqlClient.request<{ createContact: ContactFormData }>(CREATE_CONTACT, { input })
  return data.createContact
}