import { useState } from "react";
import CartContext from "./Cartcontext";
import { api } from "../services/api";

export default function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(false);

   async  function removeFromCart(productId){
        await api.delete(`/shoppingcart/${productId}`)
        setCartProducts((prevProducts) => {
            prevProducts.filter((product) => product.id !== productId );
        })
    }

    return (
        <CartContext.Provider value={{cartProducts, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}