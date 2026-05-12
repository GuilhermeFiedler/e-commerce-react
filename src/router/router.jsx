import { Navigate, createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/homepage/Homepage"
import Produtos from "../components/produtos/Produtos"
import ProdutoDetalhe from "../components/produtos/ProdutoDetalhe"
import { LoginPage } from "../pages/loginPage/LoginPage"
import { RegisterPage } from "../pages/registerPage/RegisterPage"

export const router = createBrowserRouter(
    [
   {path:"/", element: <Homepage/>},
   { path:"/produtos", element: <Produtos/> },
   { path:"/produtos/:id", element: <ProdutoDetalhe /> },
   { path: "/login", element: <LoginPage />},
   { path: "/register", element: <RegisterPage />},
   { path:"/home", element: <Navigate to="/" replace /> },
    ]
) 
