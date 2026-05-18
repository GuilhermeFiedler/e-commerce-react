import Button from "../../components/Button/Button";
import { useCart } from "../../hook/useCart"

export default function ShopcartPage(){
 const { cartProducts, removeFromCart, addToCart } = useCart();

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
            {cartProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p className="cart-product-price">
                        RS$ {product.price}
                    </p>
                    <Button onClick={() => addToCart(product.id)}></Button>
                    <Button onClick={() => removeFromCart(product.id)}>
                        Remover
                    </Button>
                </div>
            ))}
            </div>
        </div>
    )
}