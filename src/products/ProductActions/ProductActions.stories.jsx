import { FavoritesContext } from "../../contexts/index.js";
import ProductActions from "./ProductActions.jsx";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: ProductActions,
  decorators: [
    withRouter,
    (Story) => (
      <FavoritesContext.Provider>
        <Story />
      </FavoritesContext.Provider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
};

export const Example = {
  args: {
    id: 123,
  },
};
