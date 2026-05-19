import CardItem from "../cardItem/cardItem";
import styles from "./Produtos.module.css"
//import { useSearchParams } from "react-router-dom";
import useListaProdutoUtils from "../../hook/useListaProdutoUtils";

export default function Produtos(){
    const products = useListaProdutoUtils();
    
    return (
        <div >
        <h1>Lista de Produtos</h1>
        <ul className={styles.productsList}>
        {products.map((product) => (
            <li key={product.id}className={styles.productsItem}>
            <CardItem  product={product}/>
        </li>
        ))}
        
        </ul>
        </div>
    )
}