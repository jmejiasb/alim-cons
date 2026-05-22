"use client";

import { createContext, useContext } from "react";

interface CurrencyContextValue {
	usdRate: number | null;
}

const CurrencyContext = createContext<CurrencyContextValue>({
	usdRate: null,
});

export function CurrencyProvider({
	usdRate,
	children,
}: {
	usdRate: number | null;
	children: React.ReactNode;
}) {
	return (
		<CurrencyContext.Provider value={{ usdRate }}>
			{children}
		</CurrencyContext.Provider>
	);
}

export function useCurrency() {
	return useContext(CurrencyContext);
}
