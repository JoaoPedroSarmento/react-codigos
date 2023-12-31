import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./pages/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [],
  },
]);
