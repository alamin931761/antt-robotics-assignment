import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../pages/AddProduct";
import ManageProduct from "../pages/ManageProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AddProduct />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "manage-product",
        element: <ManageProduct />,
      },
    ],
  },
]);

export default router;
