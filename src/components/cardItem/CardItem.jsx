import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CardItem.module.css";
import { CgAdd } from "react-icons/cg";
import { useCart } from "../../hook/useCart";

export default function CardItem({ product }) {
  const { addToCart, addLoading } = useCart();

  return (
    <Link className={styles.cardLink}to={`/produtos/${product.id}`}>
      <div className={styles.cardBody}>
        <h3 className={styles.cardItemTitle}>{product.title}</h3>
        <div className={styles.cardImg}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.cardPrice}>R${product.price}</div>
        <div className={styles.cardButtons}>
        <Button
            type="addItem"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            disabled={addLoading}
          >
            {addLoading ? "Adicionando.." : <CgAdd />}
          </Button>
        </div>
      </div>
    </Link>
  );
}
