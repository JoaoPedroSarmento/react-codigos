import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Detalhes from "./pages/Detalhes";
import Carrinho from "./pages/Carrinho";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detalhes/:produtoNome",
        element: <Detalhes />,
      },
      ,
      {
        path: "carrinho",
        element: <Carrinho />,
      },
    ],
  },
]);

export default router;
