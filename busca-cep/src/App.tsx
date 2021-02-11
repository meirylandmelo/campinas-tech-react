import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { Cep } from './Types/cep';

function App() {
  const [cep, setCep] = useState<String>("")

  const [info, setInfo] = useState<Cep>()

  
  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setInfo(resposta.data))
  }

  return (
    <div className="App">
      <input className="input" type="text" onChange={(event) => setCep(event.target.value)}/>
      <button onClick={getCep}>Buscar Cep</button>
      <div className="info">
        <h1>Informações</h1>
        <p>Logradouro: {info?.logradouro}</p>
        <p>Complemento: {info?.complemento}</p>
        <p>Bairro: {info?.bairro}</p>
        <p>Cidade: {info?.localidade}</p>
        <p>UF: {info?.uf}</p>
      </div>
    </div>
  )
}

export default App;
