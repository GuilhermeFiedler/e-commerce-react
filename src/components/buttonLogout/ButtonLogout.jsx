import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
export default function ButtonLogout(){
    const {logout} = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/login");
    }

    return(
        <Button onClick={handleLogout}>Logout</Button>
    )
}