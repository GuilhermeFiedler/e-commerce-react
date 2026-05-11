import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastre-se</Link>
        </nav>
    );
}