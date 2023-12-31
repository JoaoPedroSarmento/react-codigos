import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import AdminHome from "./pages/admin/Admin.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Product from "./pages/Product.jsx";
import loadProduct from "./loaders/product.js";
import ProductBoundary from "./error-boundaries/ProductBrondary.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary/>
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminHome />,
  },
]);

export default router;
