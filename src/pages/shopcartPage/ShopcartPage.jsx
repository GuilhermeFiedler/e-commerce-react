import Button from "../../components/Button/Button";
import { useCart } from "../../hook/useCart"

export default function ShopcartPage(){
 const { cartProducts, deleteFromCart, total, updateCartProduct } = useCart();

    if(cartProducts.length === 0){
        return(
            <div>
                <h1>Shopping Cart</h1>
                <h2>Não há itens no carrinho</h2>
            </div>
        )
    }

    return(
        <div className="cart-body">
            <h1>Shopping Cart</h1>
            <div className="cart-top">
            {cartProducts.map((item) => (
                <div key={item.id}>
                    <h3>{item.product?.title || item.title}</h3>
                    <p className="cart-product-price">
                        RS$ {item.product?.price}
                    </p>
                    <p>Qtd: {item.quantity}</p>
                    <p>Subtotal: R$ {item.product?.price * item.quantity}</p>
                    <Button onClick={() => updateCartProduct(item.id, item.quantity -1)}>-</Button>
                    <Button onClick={() => updateCartProduct(item.id, item.quantity +1)}>+</Button>
                    <Button onClick={() => deleteFromCart(item.id)}>
                        Remover
                    </Button>
                </div>
            ))}
            </div>
            <h2>Total: R$ {total}</h2>
        </div>
    )
}