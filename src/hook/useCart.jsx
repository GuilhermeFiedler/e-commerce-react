import { useContext } from "react";
import CartContext from "../contexts/Cartcontext";

export function useCart(){
    const context = useContext(CartContext);
    return context
}