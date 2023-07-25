import { createBrowserRouter } from "react-router-dom";
import OrdersRoute from "../orders/OrdersRoute";
import ProductsRoute from "../products/ProductsRoute";
import { MainTemplate } from "../ds/templates";
import { ProductRoute } from "../products/ProductRoute";

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
        element: <div>Finance</div>,
      },
      {
        path: "/reports",
        element: <div>Rapports</div>,
      },
      {
        path: "/messages",
        element: <div>Messages</div>,
      },
      {
        path: "/marketplaces",
        element: <div>Marketplaces</div>,
      },
    ],
  },
]);
