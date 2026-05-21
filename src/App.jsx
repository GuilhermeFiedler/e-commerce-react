import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/router'
import AuthProvider from './contexts/AuthProvider'
import CartProvider from './contexts/CartProvider'
import ThemeProvider from './contexts/ThemeProvider'
import { useTheme } from './hook/useTheme'
/*Crie uma aplicação de e-commerce básica com: React Router (Home, Produtos, Detalhe, Carrinho, 
Login), AuthContext para autenticação, ThemeContext para dark mode, serviço de API centralizado 
consumindo uma API mock, e rota protegida para o carrinho.  */

function App() {
    const { theme } = useTheme
  return (
    <div className={theme}>
    <AuthProvider> <ThemeProvider><CartProvider><RouterProvider router={router} /></CartProvider></ThemeProvider></AuthProvider>
   
  </div>
  )
}

export default App


 