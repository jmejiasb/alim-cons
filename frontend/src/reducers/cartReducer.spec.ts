import type { Ebook } from "@/types/ebook";
import { cartReducer } from "./cartReducer";

describe("cartReducer", () => {
	const makeEbook = (overrides: Partial<Ebook> = {}): Ebook => ({
		id: "1",
		title: "Test ebook",
		regularPrice: 1000,
		imgUrl: "test.jpg",
		...overrides,
	});

	const makeState = () => ({
		items: [
			{
				ebook: makeEbook(),
				quantity: 1,
				addedAt: new Date(),
			},
		],
		isOpen: false,
	});

	it("adds an item correctly", () => {
		const state = makeState();
		const ebook = makeEbook({ id: "2" });

		const nextState = cartReducer(state, {
			type: "ADD_ITEM",
			payload: ebook,
		});

		expect(nextState.items).toHaveLength(2);
	});

	it("does not add an item if it exists already", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "ADD_ITEM",
			payload: makeEbook(),
		});

		expect(nextState.items).toHaveLength(1);
		expect(nextState).toBe(state);
	});

	it("does nothing if item does not exists", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "REMOVE_ITEM",
			payload: "2",
		});

		expect(nextState.items).toHaveLength(1);
		expect(nextState.items[0].ebook.id).toBe("1");
	});

	it("removes item if item exists", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "REMOVE_ITEM",
			payload: "1",
		});

		expect(nextState.items).toHaveLength(0);
	});

	it("clears cart", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "CLEAR_CART",
		});

		expect(nextState.items).toHaveLength(0);
		expect(nextState.isOpen).toBe(state.isOpen);
	});

	it("toggles drawer", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "TOGGLE_DRAWER",
		});

		expect(nextState.isOpen).toBe(true);
	});

	it("toggles drawer back to false", () => {
		const state = {
			...makeState(),
			isOpen: true,
		};

		const nextState = cartReducer(state, {
			type: "TOGGLE_DRAWER",
		});

		expect(nextState.isOpen).toBe(false);
	});

	it("sets drawer to true", () => {
		const state = makeState();

		const nextState = cartReducer(state, {
			type: "SET_DRAWER",
			payload: true,
		});

		expect(nextState.isOpen).toBe(true);
	});

	it("sets drawer to false", () => {
		const state = {
			...makeState(),
			isOpen: true,
		};

		const nextState = cartReducer(state, {
			type: "SET_DRAWER",
			payload: false,
		});

		expect(nextState.isOpen).toBe(false);
	});
});
