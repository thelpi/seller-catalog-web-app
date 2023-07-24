import { string } from "prop-types";

export default function ProductImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name}></img>;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};
