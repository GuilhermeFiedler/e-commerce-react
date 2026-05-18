import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CardItem.module.css"
import { CgAdd } from "react-icons/cg";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useCart } from "../../hook/useCart";

export default function CardItem({product}){
    const {addToCart, addLoading, deleteFromCart} = useCart();
    
    return(
        <Link to={`/products/${product.id}`}>
        <div className={styles.cardBody}>
            <h3 className="card-item-title">{product.title}</h3>
            <div className="cardImg">
                <img src={product.img} alt={product.title}/>
            </div>
            <div className="card-price">
                RS${product.price}
            </div>
            <div className="card-buttons">
                <Button type="removeItem" onClick={() => deleteFromCart(product.id)} ><IoIosRemoveCircleOutline/></Button>
                <Button type="addItem" onClick={() => addToCart(product)} disabled={addLoading}>{addLoading ? "Adicionando.." : <CgAdd />}</Button>
                
            </div>
        </div>
        </Link>
    )
}

