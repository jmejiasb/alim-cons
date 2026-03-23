import { formatCLP } from "./formatClp";

describe("formatCLP", () => {
  it("formats CLP amounts correctly", () => {
    const amount = 100000;

    expect(formatCLP(amount)).toBe("$100.000");
  });
});
