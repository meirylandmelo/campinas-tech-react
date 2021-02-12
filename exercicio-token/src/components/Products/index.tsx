import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { Produto } from "../../types/product"




const Products = () => {

        const [produtos, setProdutos] = useState<Produto[]>([])
        const token = localStorage.getItem("token")

        useEffect(() => { 
            const headers = {
                'Authorization': `Bearer ${token}`
            }
    
            axios.get("http://localhost:4000/products", {headers: headers})
              .then(resposta => setProdutos(resposta.data))
        },[])

        if (!token) {
            return (
                <Redirect to="/" />
            )
        }
        
        return (
            <>
            {produtos.map((item:Produto) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <img src={item.image} alt=""/>
                </div>
            ))
            }
            </>
        )
      }

   



export default Products