import { useCheckout } from "./useCheckout";
import { useCartContext } from "@/context/CartContext";
import { renderHook, act } from "@testing-library/react";
import { createPurchase } from "@/repositories/purchaseRepository";

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("@/repositories/purchaseRepository", () => ({
  createPurchase: jest.fn(),
}));

describe("useCheckout", () => {
  const makeState = () => ({
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
  });

  const makeEmptyState = () => ({
    items: [],
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets name and email correctly", () => {
    (useCartContext as jest.Mock).mockReturnValue({
      state: { items: [] },
    });

    const { result } = renderHook(() => useCheckout());

    const name = "test";
    const email = "test@test.com";

    act(() => {
      result.current.setName(name);
      result.current.setEmail(email);
    });

    expect(result.current.name).toBe("test");
    expect(result.current.email).toBe("test@test.com");
  });

  it("creates a purchase with the correct payload", async () => {
    (useCartContext as jest.Mock).mockReturnValue({ state: makeState() });
    (createPurchase as jest.Mock).mockResolvedValue({ id: "id" });

    const { result } = renderHook(() => useCheckout());

    act(() => {
      result.current.setName("test");
      result.current.setEmail("test@test.com");
    });

    let purchaseId: string | null | undefined;

    await act(async () => {
      purchaseId = await result.current.createPurchase();
    });

    expect(createPurchase).toHaveBeenCalledWith({
      name: "test",
      email: "test@test.com",
      items: [{ ebookId: "1" }, { ebookId: "2" }],
    });

    expect(purchaseId).toBe("id");
  });

  it("does not create a purchase if cart is empty", async () => {
    (useCartContext as jest.Mock).mockReturnValue({ state: makeEmptyState() });
    (createPurchase as jest.Mock).mockResolvedValue(null);

    const { result } = renderHook(() => useCheckout());

    act(() => {
      result.current.setName("test");
      result.current.setEmail("test@test.com");
    });

    let purchaseId: string | null | undefined;

    await act(async () => {
      purchaseId = await result.current.createPurchase();
    });

    expect(createPurchase).not.toHaveBeenCalled();

    expect(purchaseId).toBeUndefined();
  });

  it("sets loading while creating purchase correctly", async () => {
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

    (useCartContext as jest.Mock).mockReturnValue({ state });

    let resolvePurchase!: (value: { id: string }) => void;

    (createPurchase as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolvePurchase = resolve;
        }),
    );

    const { result } = renderHook(() => useCheckout());

    act(() => {
      result.current.setName("test");
      result.current.setEmail("test@test.com");
    });

    expect(result.current.loading).toBe(false);

    let promise!: Promise<string | null | undefined>;

    await act(async () => {
      promise = result.current.createPurchase();
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      resolvePurchase({ id: "id" });
      await promise;
    });

    expect(result.current.loading).toBe(false);
  });
});
