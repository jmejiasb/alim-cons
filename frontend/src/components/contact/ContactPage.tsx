"use client";

import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { ContactFormData } from "@/schemas/contactSchema";
import { postContactData } from "@/repositories/contactRepository";
import { PageTitle } from "../layout/PageTitle";

export function ContactPage() {
  const buttons = useDefaultNavButtons();

  const onSubmit = async (data: ContactFormData) => postContactData(data);

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />

      <PageTitle title="Contáctanos" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ContactForm onSubmit={onSubmit} />

        <div className="relative hidden md:block aspect-2/3 w-full row-span-2 h-125">
          <Image
            fill
            src={"https://picsum.photos/id/41/1280/805"}
            alt={"Reinnys Benitez"}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </PageContainer>
  );
}
