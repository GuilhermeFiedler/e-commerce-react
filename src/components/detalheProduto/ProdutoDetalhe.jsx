import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export default function ProdutoDetalhe(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct(){
        try{
            const res = await api.get(`/products/${id}`)

            setProduct(res);
        } catch(err){
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
        loadProduct();
}, [id])

    if(loading) {
        return <p>Carregando...</p>
    }
    if(!product){
        return <p>Produto não encontrado</p>
    }

    return(
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <strong>RS${product.price}</strong>
        </div>
    )
}