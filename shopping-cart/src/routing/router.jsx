import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/main/home";
import Cart from "../components/main/cart";
import Products from "../components/main/productpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true , element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products/:id", element: <Products /> },
    ],
  },
]);
export default router;
