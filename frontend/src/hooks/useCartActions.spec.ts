import { renderHook, act } from "@testing-library/react";
import { useCartActions } from "./useCartActions";
import { useCartContext } from "@/context/CartContext";
import { Ebook } from "@/types/ebook";

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

describe("useCartActions", () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCartContext as jest.Mock).mockReturnValue({ dispatch });
  });

  it("dispatches ADD_ITEM", () => {
    const ebook = {
      id: "1",
      title: "Test ebook",
      regularPrice: 1000,
    };

    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.addItem(ebook as Ebook);
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_ITEM",
      payload: ebook,
    });
  });

  it("dispatches REMOVE_ITEM", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.removeItem("1");
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "REMOVE_ITEM",
      payload: "1",
    });
  });

  it("dispatches CLEAR_CART", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.clearCart();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "CLEAR_CART",
    });
  });

  it("dispatches TOGGLE_DRAWER", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.toggleDrawer();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "TOGGLE_DRAWER",
    });
  });

  it("dispatches SET_DRAWER true", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.openDrawer();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_DRAWER",
      payload: true,
    });
  });

  it("dispatches SET_DRAWER false", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.closeDrawer();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_DRAWER",
      payload: false,
    });
  });
});
