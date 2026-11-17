import { createBrowserRouter } from "react-router-dom";
import Products from "../redux/components/Products";
import Cart from "../redux/components/Cart";
import NavBar from "../redux/components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Products />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <NavBar />
        <Cart />
      </>
    ),
  },
]);

export default router;