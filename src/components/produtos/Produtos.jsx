import CardItem from "../cardItem/cardItem";
import styles from "./Produtos.module.css"
export default function Produtos(){
    return (
        <div >
        <h1>Lista de Produtos</h1>
        <ul className={styles.productsList}>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        <li className={styles.productsItem}>
            <CardItem />
        </li>
        </ul>
        </div>
    )
}