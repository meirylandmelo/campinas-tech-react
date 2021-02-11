import React from 'react'

function Contatos(prop) {
    const { contatos } = prop
    console.log(contatos)

    return (
        <div className="lista-de-contatos">
            {contatos.map(item => (
                <li key={item.id}>
                    <div className="item-contato">
                        <h4>{item.tipo}</h4>
                        <p>{item.contato}</p>
                    </div>
                    <div>
                        <img className="icon-midia" src={`/icons/${item.icon}`} alt="icones" />
                    </div>
                </li>
            ))}
        </div>
    )
}

export default Contatos