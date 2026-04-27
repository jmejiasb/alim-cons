"use client";
import { BankDetailRow } from "./BankDetailRow";

export function BankTransferDetails() {
	return (
		<div className="space-y-3 rounded-lg border bg-card p-6 text-left">
			<BankDetailRow label="Nombre" value="Reinnys Daniela Benitez Alvarez" />
			<BankDetailRow label="RUT" value="26803758-6" />
			<BankDetailRow label="Banco" value="Banco Santander" />
			<BankDetailRow label="N° Cuenta" value="000075979983" copyable />
			<BankDetailRow label="Email" value="reinnys13@gmail.com" />
		</div>
	);
}
