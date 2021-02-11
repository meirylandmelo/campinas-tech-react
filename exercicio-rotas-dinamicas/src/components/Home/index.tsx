import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Product } from "../../types/product"
import "../../App.css"

const Home = () => {

    const [produtos, setProdutos] = useState<Product[]>([])

    useEffect(()=> {
        axios.get("https://fakestoreapi.com/products")
            .then(resposta => setProdutos(resposta.data))
    }, [])

    return (
        <div>
            {
                produtos.map((item: Product) => (
                    <div className="lista-produto" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Valor:{item.price}</p>
                        <Link to={`/produto/${item.id}`}>Detalhes do produto</Link>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Home