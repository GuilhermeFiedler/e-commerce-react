import Button from "../../components/Button/Button";
import { useCart } from "../../hook/useCart"
import styles from "./ShopcartPage.module.css"
export default function ShopcartPage(){
 const { cartProducts, deleteFromCart, total, updateCartProduct } = useCart();

    if(cartProducts.length === 0){
        return(
            <div className={styles.emptyCart}>
                <h2>Não há itens no carrinho</h2>
            </div>
        )
    }

    return(
        <div className={styles.cartBody}>
            <h1>Seu Carrinho</h1>
            <div className={styles.cartTop}>
            {cartProducts.map((item) => (
                <div key={item.id}>
                    <h3>{item.product?.title || item.title}</h3>
                    <p className={styles.cartProductPrice}>
                        R$ {item.product?.price}
                    </p>
                    <p>Qtd: {item.quantity}</p>
                    <p>Subtotal: R$ {item.product?.price * item.quantity}</p>
                    <Button onClick={() => updateCartProduct(item.id, item.quantity +1)}>Adicionar unidade</Button>
                    <Button onClick={() => updateCartProduct(item.id, item.quantity -1)}>Remover unidade</Button>
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