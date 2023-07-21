import { createBrowserRouter } from "react-router-dom";
import OrdersPage from "../orders/OrdersPage";
import ProductsPage from "../products/ProductsPage";
import { MainTemplate } from "../ds/templates";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
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
