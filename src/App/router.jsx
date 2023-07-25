import { createBrowserRouter } from "react-router-dom";
import OrdersRoute from "../orders/OrdersRoute";
import ProductsRoute from "../products/ProductsRoute";
import { MainTemplate } from "../ds/templates";
import { ProductRoute } from "../products/ProductRoute";
import { Page } from "../ds/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
      {
        path: "/products",
        element: <ProductRoute />,
      },
      {
        path: "/products/:id",
        element: <ProductRoute />,
      },
      {
        path: "/orders",
        element: <OrdersRoute />,
      },
      {
        path: "/financial",
        element: <Page title="Finance" />,
      },
      {
        path: "/reports",
        element: <Page title="Rapports" />,
      },
      {
        path: "/messages",
        element: <Page title="Messages" />,
      },
      {
        path: "/marketplaces",
        element: <Page title="Marketplaces" />,
      },
    ],
  },
]);
