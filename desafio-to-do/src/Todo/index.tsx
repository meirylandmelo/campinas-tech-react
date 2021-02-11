import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToDo = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state: any) => state.toDo.arrayToDo)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(resposta => dispatch({ type: 'GET_TO_DO', payload: resposta.data}))
    }, [dispatch])


    return (
        <div>
            <ul>
             {todo.map((item:any) => (
                <li key={item.id}>
                    {item.id} - {item.title}
                </li>
             ))
            }
            </ul>
        </div>
    );
}

export default ToDo;