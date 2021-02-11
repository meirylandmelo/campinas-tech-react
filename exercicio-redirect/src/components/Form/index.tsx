import { useRef, useState } from "react"
import { Redirect } from "react-router-dom"

const Form = () => {
    let inputEmail = useRef<HTMLInputElement> (null)
    let inputPassword = useRef<HTMLInputElement> (null)

    const [logado, setLogado] = useState<boolean>(false)
    const [erro, setErro] = useState<boolean>(false)
    const [email] = useState<String>('usuario@teste.com.br')
    const [password] = useState<String>('routes')

    const login = (e: any) => {
        e.preventDefault()

        if (email === inputEmail.current?.value &&  password === inputPassword.current?.value) {
            setLogado(true)
        } else {
            setErro(true)
        }
    }

    return (
        <>
            {!logado ? <form onSubmit={login}>
                        <input type="email" placeholder="Digite seu email" ref={inputEmail}/><br/>
                        <input type="password" placeholder="Senha" ref={inputPassword}/><br/>
                        <button type="submit">Logar</button>
                        {erro && <p>Usuário ou senha incorreta</p>}
                    </form> : <Redirect to="/private" />
            } 
        </>
    )
}

export default Form 