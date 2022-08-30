import { useEffect} from 'react'
import { useTodosContext } from '../hooks/useTodosContext';
import TodoDetails from './TodoDetails';
import TodoForm from './TodoForm';



function Home() {
    const {todos, dispatch} = useTodosContext()


    useEffect(() => {
      const fetchTodos = async () => {
        const response = await fetch('/api/todos')
        const json = await response.json()

        if (response.ok) {
            dispatch({type:'SET_TODOS', payload: json})
        }
      }
      
      fetchTodos()
    }, [dispatch])
    
  return (
    <div className="border container-fluid">
      <div className='row'>
        <div className="col">
          <h3 className='text-center mt-3'>Current Tasks</h3>
          {todos && todos.map((todo) => (
            <TodoDetails key={todo._id} todo={todo}/>
          ))}
        </div>
        <div className="col-lg-6">
           <TodoForm/>
        </div>   
      </div>
    </div>
  )
}

export default Home