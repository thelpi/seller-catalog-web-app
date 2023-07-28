import { render, screen } from "@testing-library/react";
import Price from "./Price.jsx";
import { vi } from "vitest";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Price", () => {
  test("in us-US and dollar displays the price and the currency", () => {
    render(<Price value={100} currency="USD" />);

    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  test("in fr-FR and euro displays the price and the currency", () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    render(<Price value={100} />);

    expect(screen.getByText("100,00 €")).toBeInTheDocument();
  });

  test("with not supported currency", () => {
    render(<Price value={100} currency="NOPE" />);

    expect(screen.getByText("€100.00")).toBeInTheDocument();
  });
});
