import useListaProdutoUtils from "../../hook/useListaProdutoUtils";
import CardItem from "../../components/cardItem/CardItem";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const products = useListaProdutoUtils();

  return (
    <div className={styles.homepageBody}>

      <section className={styles.heroSection}>
        <h1>Bem-vindo à Loja</h1>

        <p>
          Encontre os melhores produtos com qualidade e preço justo.
        </p>
      </section>

      <section className={styles.featuredSection}>
        <h2>Produtos em Destaque</h2>

        <ul className={styles.productsList}>
          {products.map((product) => (
            <li
              key={product.id}
              className={styles.productsItem}
            >
              <CardItem product={product} />
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}