import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { BankDetailRow } from "./BankDetailRow";
import { NavigationLayout } from "../layout/NavigationLayout";

export function BankTransferDetails() {
  const buttons = useDefaultNavButtons()
  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <PageTitle title="¡Compra Realizada!" />
      <div className="mt-10 space-y-6">
        <p className="text-muted-foreground">
          Realiza la transferencia con los siguientes datos y te enviaremos tus ebooks al correo.
        </p>
        <div className="space-y-3 rounded-lg border p-6">
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