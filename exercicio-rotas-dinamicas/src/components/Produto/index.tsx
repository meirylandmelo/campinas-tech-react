import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../../types/product"

const Produto = () => {
    const params = useParams<any>()
    const [produto, setProduto] = useState<Product>()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(resposta => setProduto(resposta.data))
    }, [params])

    return (
        <>
            {
                produto ? 
                <div>
                    <h1>{produto.title}</h1>
                    <p>Valor:{produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Categoria:{produto.category}</p>
                    <img src={produto.image} alt=""/>
                </div> : null
            }
        </>
    )

}

export default Produto