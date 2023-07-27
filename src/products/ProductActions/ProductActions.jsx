import { IconButton } from "@mui/material";
import { Edit, FavoriteBorder, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import { FavoritesContext } from "../../contexts";

export default function ProductActions({ id }) {
  const { favorites, toggleFavorites } = FavoritesContext.useContext();

  const isFavorite = favorites.includes(id);

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => toggleFavorites({ id })}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
