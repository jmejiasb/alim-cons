import { BsPaypal } from "react-icons/bs";
import { BankDetailsCard } from "./BankDetailsCard";

const paypalDetails = [
	{
		label: "Correo",
		value: "reinnys13@gmail.com",
		copyable: true,
	},
];

export function PaypalDetails() {
	return (
		<BankDetailsCard
			title={"Transferencia Paypal"}
			icon={BsPaypal}
			details={paypalDetails}
		/>
	);
}