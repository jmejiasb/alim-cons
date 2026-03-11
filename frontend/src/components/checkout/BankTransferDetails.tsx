import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { BankDetailRow } from "./BankDetailRow";
import { NavigationLayout } from "../layout/NavigationLayout";
import wink from "@/assets/wink.webp"
import { AvatarRound } from "../layout/AvatarRound";

export function BankTransferDetails() {
  const buttons = useDefaultNavButtons()
  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <div className="space-y- text-center">
        <AvatarRound 
          src={wink.src}
          fallback="RB"
          className="mx-auto h-26 w-26"
        /> 
        <PageTitle title="¡Compra Realizada!" />
        <p className="max-w-md mx-auto text-muted-foreground">
          Realiza la transferencia con los siguientes datos y te enviaremos tus ebooks al correo.
        </p>
        <div className="space-y-3 rounded-lg border bg-card p-6 text-left">
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