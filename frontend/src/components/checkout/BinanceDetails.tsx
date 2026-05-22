import { SiBinance } from "react-icons/si";
import { BankDetailsCard } from "./BankDetailsCard";

const binanceDetails = [
  {
    label: "Usuario",
    value: "reinnys27",
    copyable: true,
  },
];

export function BinanceDetails() {
  return (
    <BankDetailsCard
      title={"Transferencia Binance"}
      icon={SiBinance}
      details={binanceDetails}
    />
  );
}
