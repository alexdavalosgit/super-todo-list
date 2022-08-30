import {useState} from 'react'
import { useTodosContext } from '../hooks/useTodosContext'
import { Form, Button } from 'react-bootstrap'

function TodoForm() {
    const {dispatch} = useTodosContext()
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')
    const [estimatedTime, setEstimatedTime] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    // handle submit
    const handleSubmit = async (e) => {
      e.preventDefault()

      const todo = {title, priority, estimatedTime}
      
      // fetch post request
      const response = await fetch('/api/todos/', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json'
        }
      })

      const json = await response.json();

      if(!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }

      if(response.ok) {
        setTitle('')
        setPriority('')
        setEstimatedTime('')
        setError(null)
        console.log('new task added', json)
        setEmptyFields([])
        dispatch({type: 'CREATE_TODO', payload: json})
      }
    }

    return (
      <div className="mb-5">
          <Form onSubmit={handleSubmit} className="">
            <h2 className='text-center'>Add a task</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={emptyFields.includes('title') ? 'error' : ''}
                />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Priority</Form.Label>
              <Form.Control 
              type="number" 
              placeholder="Enter priority 1-10 (1 being lowest)"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={emptyFields.includes('priority') ? 'error' : ''}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTimee">
              <Form.Label>Estimated Time</Form.Label>
              <Form.Control 
              type="number" 
              placeholder="Enter number of minutes"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
              className={emptyFields.includes('estimatedTime') ? 'error' : ''} 
              />
            </Form.Group>
    
            <Button 
            variant="primary" 
            type="submit">
              Submit
            </Button>
            {error && <div className='error'>{error}</div>}
          </Form>
        </div>
      );
}

export default TodoForm