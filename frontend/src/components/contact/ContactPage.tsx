"use client";

import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { ContactFormData } from "@/schemas/contactSchema";
import { postContactData } from "@/repositories/contactRepository";
import { PageTitle } from "../layout/PageTitle";
import contactus from "@/assets/contactus.webp";

export function ContactPage() {
  const buttons = useDefaultNavButtons();

  const onSubmit = async (data: ContactFormData) => postContactData(data);

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <PageTitle title="Contáctanos" />
      <div className="grid gap-8 items-start md:grid-cols-2">
        <div>
          <ContactForm onSubmit={onSubmit} />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative aspect-2/3 w-full max-w-sm rounded-2xl p-6">
            <Image
              fill
              src={contactus.src}
              alt="Contáctanos"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
