import { IconButton } from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import { FavoritesContext } from "../../contexts";

export default function ProductActions({ id }) {
  const { addToFavorites } = FavoritesContext.useContext();

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => addToFavorites({ id })}>
        <Favorite />
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
