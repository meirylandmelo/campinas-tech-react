import React, {useState} from 'react'
import Contatos from "../Contato"
import Educacao from "../Educacao"

function Sidebar(props) {
    const {resposta} = props
    console.log(resposta)

    const [contato, setMostrarContato] = useState(false)

    const clickContato = () => {
        setMostrarContato(!contato)
    }

    return(
        <aside>
            <div className="sidebar">
                <h3>Contatos</h3>
                <button onClick={clickContato}> {contato ? "Ocultar" : "Mostrar"} Contatos</button>
                {contato && <Contatos contatos={resposta.contatos}/>}
            </div>

            <div className="sidebar">
                <h3>Educação</h3>
                <Educacao educacao={resposta.educacao}/>
            </div>
        </aside>
    )
}

export default Sidebar