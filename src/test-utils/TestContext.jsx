import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { arrayOf, node, string } from "prop-types";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

export default function TestContext({ children, initialEntries, path }) {
  const routes = [
    {
      path,
      element: (
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      ),
    },
  ];

  if (!initialEntries || !path) {
    return routes[0].element;
  }

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex: 0,
  });

  return <RouterProvider router={router} />;
}

TestContext.propTypes = {
  children: node,
  initialEntries: arrayOf(string),
  path: string,
};
