import { useCart } from "../../hook/useCart"

export default function shopcartPage(){
 const { cartProducts } = useCart();

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
                </div>
            ))}
            </div>
        </div>
    )
}