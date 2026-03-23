// context/CartContext.tsx
"use client";

import { createContext, type ReactNode, useContext, useReducer } from "react";
import { cartReducer } from "@/reducers/cartReducer";
import type { CartAction, CartState } from "@/types/cart";

interface CartContextType {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
	items: [],
	isOpen: false,
};

export function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within CartProvider");
	}
	return context;
}
