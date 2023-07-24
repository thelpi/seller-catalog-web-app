import { string } from "prop-types";
import { withinRow } from "../../hoc";

function ProductImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name}></img>;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};

const RowProductPrice = withinRow(ProductImage);

export default RowProductPrice;
