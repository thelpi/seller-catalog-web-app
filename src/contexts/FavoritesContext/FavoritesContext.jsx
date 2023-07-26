import { node } from "prop-types";
import React, { useReducer } from "react";

const initialStore = [];

const FavoritesContext = React.createContext(initialStore);

const useContext = () => React.useContext(FavoritesContext);

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_TO_FAVORITES = "REMOVE_TO_FAVORITES";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.id];
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialStore);

  const addToFavorites = ({ id }) => dispatch({ type: ADD_TO_FAVORITES, id });
  const removeFromFavorites = ({ id }) =>
    dispatch({ type: REMOVE_TO_FAVORITES, id });

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
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
