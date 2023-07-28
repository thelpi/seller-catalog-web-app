import ProductRoute from "./ProductRoute.jsx";
import { withRouter } from "storybook-addon-react-router-v6";
import { FavoritesContext } from "../../contexts/index.js";
import { QueryClientProvider } from "@tanstack/react-query";

export default {
  component: ProductRoute,
  decorators: [
    withRouter,
    (Story) => (
      <FavoritesContext.Provider>
        <Story />
      </FavoritesContext.Provider>
    ),
    (Story) => (
      <QueryClientProvider>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/products/123",
      routeParams: { id: 123 },
    },
  },
};

// FIXME need msw configuration for this story
export const Example = {};
