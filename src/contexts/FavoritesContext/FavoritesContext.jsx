import { node } from "prop-types";
import React, { useReducer } from "react";

const initialStore = [];

const FavoritesContext = React.createContext(initialStore);

const useContext = () => React.useContext(FavoritesContext);

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.id];
    case REMOVE_FROM_FAVORITES:
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialStore);

  const toggleFavorites = ({ id }) => {
    const isFavorite = favorites.includes(id);

    dispatch({
      type: isFavorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
      id,
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
