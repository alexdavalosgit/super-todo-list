import { useEffect, useState } from 'react'
import TodoDetails from './TodoDetails';
import TodoForm from './TodoForm';



function Home() {
    const [todos, setTodos] = useState(null);


    useEffect(() => {
      const fetchTodos = async () => {
        const response = await fetch('/api/todos')
        const json = await response.json()

        if (response.ok) {
            setTodos(json)
        }
      }
      
      fetchTodos()
    }, [])
    
  return (
    <div className="home border">
      <TodoForm/>
      <div className="todos">
        {todos && todos.map((todo) => (
          <TodoDetails key={todo._id} todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default Home