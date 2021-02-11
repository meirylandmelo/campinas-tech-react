import React from 'react'

function MostraGif({clique}) {
    return (
        <img className="gif" onClick={clique} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif"/>
    )   
}

export default MostraGif