import MainTemplate from "./MainTemplate.jsx";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: MainTemplate,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <main>Main Content</main>,
    },
  },
};

export const Default = {};
