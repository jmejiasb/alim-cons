"use client";
import about from "@/assets/about.webp";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { AvatarDisplay } from "../ui/AvatarDisplay";
import { BankTransferDetails } from "./BankTransferDetails";
import { PaypalDetails } from "./PaypalDetails";
import { BinanceDetails } from "./BinanceDetails";

export function CheckoutSuccessPage() {
	const buttons = useDefaultNavButtons();
	return (
		<PageContainer maxWidth="lg">
			<NavigationLayout buttons={buttons} />
			<div className="text-center mb-2 md:grid md:grid-cols-2 md:gap-8">
				<div className="mb-8 space-y-6">
					<AvatarDisplay
						src={about.src}
						fallback="RB"
						className="mx-auto h-26 w-26 mb-1"
					/>
					<PageTitle title="¡Compra Realizada!" className="mb-5" />
					{/* <p className="max-w-md mx-auto text-muted-foreground">
					Realiza la transferencia con los siguientes datos y te enviaremos tus
					ebooks al correo.
					</p> */}
					<p className="max-w-xl mx-auto text-muted-foreground">
						¡Tu solicitud de compra fue recibida correctamente! ✨
					</p>

					<p className="max-w-xl mx-auto text-muted-foreground">
						En breve validaremos tu transferencia para confirmar el pago. Las
						compras realizadas antes de las 20:00 hrs suelen confirmarse el
						mismo día (aprox. 1 a 2 horas). Después de ese horario, la
						confirmación puede realizarse el siguiente día hábil.
					</p>

					<p className="max-w-xl mx-auto text-muted-foreground">
						Una vez confirmado el pago, recibirás en este mismo correo los
						enlaces de descarga de tus ebooks.
					</p>
				</div>
				<div className="space-y-6">
					<BankTransferDetails />
					<PaypalDetails />
					<BinanceDetails /> 
				</div>
			</div>
		</PageContainer>
	);
}
