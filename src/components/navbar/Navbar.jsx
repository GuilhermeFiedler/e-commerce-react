import { NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

export default function Navbar(){
    return( 
        <nav className="navbar">
            <NavLink to="/" className="home">
            Home
            </NavLink>

            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/login">
            <CiLogin />
            </NavLink>
            <NavLink to="/register" className="registerbtn">Cadastre-se</NavLink>
        </nav>
    );
}