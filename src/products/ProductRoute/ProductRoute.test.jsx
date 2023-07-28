import { screen, render } from "../../test-utils/render.jsx";
import ProductRoute from "./ProductRoute.jsx";
import { FavoritesContext } from "../../contexts";

describe("ProductRoute", () => {
  test("renders correctly", async () => {
    render(<ProductRoute />, {
      initialEntries: ["/products/123"],
      path: "/products/:id",
      wrapper: FavoritesContext.Provider,
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", { name: "Product Name" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("alert", { name: "product-enrichment" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ajouter aux favoris" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Editer la fiche" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: "Prix €42.99" })
    ).toBeInTheDocument();
  });
});
