import { useContext } from "react";
import CartContext from "../contexts/Cartcontext";

export function useCart(){
    const context = useContext(CartContext);

    if(!context) {
        throw new Error ("useCart deve ser usado dentro do CartProvider")
    }
    return context
}