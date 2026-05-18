import { useState } from "react";
import CartContext from "./Cartcontext";
import { api } from "../services/api";
import { useMutation } from "../hook/useMutation";

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const {
    mutate,
    loading: addLoading,
    error: addError,
  } = useMutation(async (product) => {
    const res = await api.post("/shoppingcart", {
      productId: product.id,
    });
    return res.data;
  });

  const {
    mutate: deleteMutation,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation(async (productId) => {
    const res = await api.delete(`/shoppingcart/${productId}`);
    return res.data;
  });

  const {
    mutate: updateMutation,
    loading: updateLoading,
    error: updateError,
  } = useMutation(async ({ productId, quantity }) => {
    const res = await api.put(`/shoppingcart/${productId}`, {
      quantity,
    });
    return res.data;
  });

  async function addToCart(product) {
    try {
      await mutate(product);

      setCartProducts((prevProducts) => [...prevProducts, product]);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteFromCart(productId) {
    try {
      await deleteMutation(productId);
      setCartProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId),
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function updateCartProduct(productId, quantity) {
    try {
      await updateMutation({ productId, quantity });
      setCartProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? { ...product, quantity } : product,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, deleteFromCart, addLoading, updateCartProduct, updateLoading, deleteLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}
