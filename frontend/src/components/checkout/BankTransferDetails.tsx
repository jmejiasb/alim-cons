"use client"
import { BankDetailRow } from "./BankDetailRow";

export function BankTransferDetails() {
  return (
    <div className="space-y-3 rounded-lg border bg-card p-6 text-left">
      <BankDetailRow label="Nombre" value="Tu Nombre Aquí" />
      <BankDetailRow label="RUT" value="12.345.678-9" />
      <BankDetailRow label="Banco" value="Banco de Chile" />
      <BankDetailRow label="N° Cuenta" value="1234567890" copyable />
      <BankDetailRow label="Email" value="pagos@tudominio.com" />
    </div>
  );
}
