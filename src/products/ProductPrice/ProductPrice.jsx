import { number } from "prop-types";
import { Price } from "../../ds/atoms";
import { withinRow } from "../../hoc";

function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};

const RowProductPrice = withinRow(ProductPrice);

export default RowProductPrice;
