import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Post, Usuario } from './types/interfaces';

function App() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [id, setId] = useState<Number>()
  const [posts, setPosts] = useState<Post[]>([])
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(resposta => setUsuarios(resposta.data))
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(resposta => setPosts(resposta.data))

  }, [id])
    

  return (
    <>
    
      <div className="App">
        <h1>Usuários</h1>
        <ul>
        {
        usuarios.map((usuario:Usuario) => (
          <li key={usuario.id} onClick={()=> setId(usuario.id)}>
            <p>Nome:{usuario.name} -- ID:{usuario.id}</p>
          </li>
        ))}
        </ul>
      </div>

      <div>
          <h3>Posts</h3>
          <ul>
          {
          posts.map((post:Post) =>(
              <li key={post.id}>
                UserId: {post.userId}<br />
                Titulo :{post.title}
              </li>
          ))}
          </ul>
      </div>

    </>
  );
}

export default App;
