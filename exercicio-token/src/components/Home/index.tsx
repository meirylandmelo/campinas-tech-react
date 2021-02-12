import { useRef, useState } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"



const Home = () => {
    const usuario = useRef<HTMLInputElement>(null)
    const senha = useRef<HTMLInputElement>(null)  
    const [cadastrado, setCadastrado] = useState<Boolean>(false)
  
    const cadastrar = (e: any) => {
        e.preventDefault()

        const requisicao = {
            email:usuario.current?.value,
            password: senha.current?.value
        }

        axios.post("http://localhost:4000/users", requisicao)
            .then(resposta => {
                localStorage.setItem("token", resposta.data.accessToken)

                if (resposta.data.accessToken) {
                    setCadastrado(true)
                }
            })
    }
  
    return (
      <div>
            {!cadastrado ?
          <form onSubmit={cadastrar}>
            <input type="email" placeholder="Usuario" ref={usuario}/><br/>
            <input type="password" placeholder="Senha" ref={senha}/><br/>
            <button type="submit">Cadastrar</button><br/>
          </form> :<Redirect to="/produtos" />}
               
      </div>
    );
}

export default Home