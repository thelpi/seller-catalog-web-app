import { number } from "prop-types";
import { withinRow } from "../../hoc";

function ProductPrice({ price }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

ProductPrice.propTypes = {
  price: number,
};

const RowProductPrice = withinRow(ProductPrice);

export default RowProductPrice;
