import { Navigate, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Produtos from "../components/produtos/Produtos";
import ProdutoDetalhe from "../components/detalheProduto/ProdutoDetalhe";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { RegisterPage } from "../pages/registerPage/RegisterPage";
import ShopcartPage from "../pages/shopcartPage/ShopcartPage";
import RotaProtegida from "../components/RotaProtegida";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "/produtos", element: <Produtos /> },
      { path: "/produtos/:id", element: <ProdutoDetalhe /> },
      {
        path: "/shoppingCart",
        element: (
          <RotaProtegida>
            <ShopcartPage />
          </RotaProtegida>
        ),
      },
      { path: "/home", element: <Navigate to="/" replace /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  ,
]);
