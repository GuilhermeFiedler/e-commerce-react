import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/Router'
/*Crie uma aplicação de e-commerce básica com: React Router (Home, Produtos, Detalhe, Carrinho, 
Login), AuthContext para autenticação, ThemeContext para dark mode, serviço de API centralizado 
consumindo uma API mock, e rota protegida para o carrinho.  */

function App() {

  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App


 