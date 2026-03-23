"use client";
import about from "@/assets/about.webp";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { AvatarDisplay } from "../ui/AvatarDisplay";
import { BankTransferDetails } from "./BankTransferDetails";

export function CheckoutSuccessPage() {
	const buttons = useDefaultNavButtons();
	return (
		<PageContainer maxWidth="md">
			<NavigationLayout buttons={buttons} />
			<div className="space-y-8 text-center">
				<AvatarDisplay
					src={about.src}
					fallback="RB"
					className="mx-auto h-26 w-26"
				/>
				<PageTitle title="¡Compra Realizada!" />
				<p className="max-w-md mx-auto text-muted-foreground">
					Realiza la transferencia con los siguientes datos y te enviaremos tus
					ebooks al correo.
				</p>
				<BankTransferDetails />
			</div>
		</PageContainer>
	);
}
