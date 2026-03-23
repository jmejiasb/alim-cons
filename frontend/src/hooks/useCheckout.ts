import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { createPurchase } from "@/repositories/purchaseRepository";
import type { CreatePurchaseInput } from "@/types/purchase";

export function useCheckout() {
	const { state } = useCart();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const createPurchaseAction = async () => {
		if (!state.items?.length) return;

		setLoading(true);

		try {
			const input: CreatePurchaseInput = {
				name,
				email,
				items: state.items.map((i) => ({
					ebookId: i.ebook.id,
				})),
			};

			const purchase = await createPurchase(input);
			return purchase?.id ?? null;
		} finally {
			setLoading(false);
		}
	};

	return {
		name,
		email,
		setName,
		setEmail,
		loading,
		createPurchase: createPurchaseAction,
	};
}
