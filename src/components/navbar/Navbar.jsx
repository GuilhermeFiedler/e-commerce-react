import { NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ButtonLogout from "../buttonLogout/ButtonLogout";
import ButtonTheme from "../buttonTheme/ButtonTheme";
import "./Navbar.css";
import useAuth from "../../hook/useAuth";
export default function Navbar() {
    const {user} = useAuth();
  return (
    <nav className="navbar">
        <div className="navbar-left">
      <NavLink to="/" className="home">
        Plantae
      </NavLink>

      <NavLink to="/produtos" className="nav-link">Produtos</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/shoppingCart" className="icon-link">
        <FaShoppingCart />
      </NavLink>
      {!user && (
        <NavLink to="/login" className="icon-link">
          <CiLogin />
        </NavLink>
      )}
      {user && <ButtonLogout />}
      {!user && (
        <NavLink to="/register" className="btnRegisterNav">
          Cadastre-se
        </NavLink>
      )}
      <ButtonTheme />
      </div>
    </nav>
  );
}
