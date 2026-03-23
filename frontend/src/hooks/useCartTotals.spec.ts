import { renderHook } from "@testing-library/react";
import { useCartContext } from "@/context/CartContext";
import { useCartTotals } from "./useCartTotals";

jest.mock("@/context/CartContext", () => ({
	useCartContext: jest.fn(),
}));

describe("useCartActions", () => {
	const state = {
		items: [
			{
				ebook: {
					id: "1",
					name: "Test ebook 1",
					salesPrice: 0,
					regularPrice: 1000,
				},
				quantity: 1,
			},
			{
				ebook: {
					id: "2",
					name: "Test ebook 2",
					salesPrice: 1000,
					regularPrice: 2000,
				},
				quantity: 1,
			},
		],
	};

	beforeEach(() => {
		jest.clearAllMocks();
		(useCartContext as jest.Mock).mockReturnValue({ state });
	});

	it("returns the subtotal correctly", () => {
		const { result } = renderHook(() => useCartTotals());

		expect(result.current.subtotal).toBe(2000);
	});

	it("returns the item count correctly", () => {
		const { result } = renderHook(() => useCartTotals());

		expect(result.current.itemCount).toBe(2);
	});
});
