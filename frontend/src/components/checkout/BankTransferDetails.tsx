import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { BankDetailRow } from "./BankDetailRow";
import { NavigationLayout } from "../layout/NavigationLayout";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import wink from "@/assets/wink.webp"

export function BankTransferDetails() {
  const buttons = useDefaultNavButtons()
  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <div className="space-y-6 text-center">
        <Avatar className="h-26 w-26 mx-auto">
          <AvatarImage src={wink.src} alt="reinnys benitez" className="object-contain" />
          <AvatarFallback>Compra Realizada!</AvatarFallback>
        </Avatar>
        <PageTitle title="¡Compra Realizada!" />
        <p className="max-w-md mx-auto text-emerald-800 dark:text-zinc-50">
          Realiza la transferencia con los siguientes datos y te enviaremos tus ebooks al correo.
        </p>
        <div className="space-y-3 rounded-lg border p-6 text-left">
          <BankDetailRow label="Nombre" value="Tu Nombre Aquí" />
          <BankDetailRow label="RUT" value="12.345.678-9" />
          <BankDetailRow label="Banco" value="Banco de Chile" />
          <BankDetailRow label="N° Cuenta" value="1234567890" copyable />
          <BankDetailRow label="Email" value="pagos@tudominio.com" />
        </div>
      </div>
    </PageContainer>
  )
}