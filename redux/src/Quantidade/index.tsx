import React from 'react'
import {useSelector} from 'react-redux'
import Aumenta from '../Aumenta'
import Diminui from '../Diminui'

interface Store {
    quantidade: number
}


const Quantidade = () => {
    const valorQuantidade = useSelector((state: Store) => state.quantidade)

    return (
        <div className="App">
            <Diminui/>
            <p>{valorQuantidade}</p>
            <Aumenta/>
        </div>
        
    )
}

export default Quantidade