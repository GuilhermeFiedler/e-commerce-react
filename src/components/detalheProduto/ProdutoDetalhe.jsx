import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import styles from "./ProdutoDetalhe.module.css";
export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await api.get(`/products/${id}`);

        setProduct(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className={styles.productDetailPage}>
      <div className={styles.productDetailCard}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.productInfo}>
          <h1>{product.title}</h1>

          <p className={styles.productDescription}>{product.description}</p>

          <strong className={styles.productPrice}>R$ {product.price}</strong>
        </div>
      </div>
    </div>
  );
}
