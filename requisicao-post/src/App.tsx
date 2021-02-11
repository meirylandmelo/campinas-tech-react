import axios from 'axios';
import React, { useRef } from 'react';
import './App.css';

function App() {

  let inputName = useRef<HTMLInputElement>(null)
  let inputAge = useRef<HTMLInputElement>(null)
  let inputCompany = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)

  const enviar = () => {
    const nome = inputName.current?.value
    const idade = inputAge.current?.value
    const empresa = inputCompany.current?.value
    const telefone = inputPhone.current?.value

    axios.post("http://localhost:4000/usuarios", {
       name: nome,
       age: idade,
       company: empresa,
       phone: telefone
     })
       .then(resposta => console.log(resposta))
  }
  return (
    <div className="App">
      <input type="text" placeholder="Digite seu nome..." ref={inputName}/>
      <br/>
      <input type="text" placeholder="Digite sua idade..." ref={inputAge}/>
      <br/>
      <input type="text" placeholder="Digite sua empresa..." ref={inputCompany}/>
      <br/>
      <input type="text" placeholder="Digite seu telefone..." ref={inputPhone}/>
      <br/>
      <button onClick={enviar}>Enviar</button>
    </div>
  );
}

export default App;
