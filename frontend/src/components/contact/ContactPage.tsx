"use client";

import Image from "next/image";
import contactus from "@/assets/contactus.webp";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { createContact } from "@/repositories/contactRepository";
import type { ContactFormData } from "@/schemas/contactSchema";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { ContactForm } from "./ContactForm";

export function ContactPage() {
	const buttons = useDefaultNavButtons();

	const onSubmit = async (data: ContactFormData) => {
		await createContact(data);
	};

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
							priority
							alt="Contáctanos"
							className="object-contain"
							sizes="(max-width: 768px) 0px, (max-width: 1024px) 40vw, 384px"
						/>
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
