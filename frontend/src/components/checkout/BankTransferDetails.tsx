"use client";
import { LuBanknote } from "react-icons/lu";
import { BankDetailsCard } from "./BankDetailsCard";

const bankDetails = [
	{
		label: "Nombre",
		value: "Reinnys Daniela Benitez Alvarez",
		copyable: true,
	},
	{ label: "RUT", value: "26803758-6", copyable: true },
	{ label: "Banco", value: "Banco Santander", copyable: true },
	{ label: "Tipo de cuenta", value: "Cuenta corriente", copyable: true },
	{ label: "N° Cuenta", value: "000075979983", copyable: true },
	{ label: "Email", value: "reinnys13@gmail.com", copyable: true },
];

export function BankTransferDetails() {
	return (
		<BankDetailsCard
			title={"Transferencia Bancaria"}
			icon={LuBanknote}
			details={bankDetails}
		/>
	);
}
