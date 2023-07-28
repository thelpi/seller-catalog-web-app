import { render, screen } from "@testing-library/react";
import ProductImage from "./ProductImage.jsx";

describe("ProductImage", () => {
  it("renders an image", () => {
    render(<ProductImage imageUrl="http://test/image.png" name="Alt text" />);

    expect(screen.getByAltText("Alt text")).toHaveAttribute(
      "src",
      "http://test/image.png"
    );
  });

  it("renders correctly", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const container = render(
      <ProductImage imageUrl="http://test/image.png" name="Alt text" />
    );

    expect(container).toMatchSnapshot();
  });
});
