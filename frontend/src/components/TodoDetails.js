import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext';
import { ListGroup, Card} from 'react-bootstrap'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function TodoDetails({ todo }) {

  const { title, priority, estimatedTime } = todo;
  const {dispatch} = useTodosContext()

  const handleClick = async () => {

    const response = await fetch('/api/todos/' + todo._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_TODO', payload: json})
    }
  }

  return (
    <div className='d-flex pt-2 justify-content-center'>
    <Card style={{ width: '25rem' }} className='mb-3'>
      <ListGroup>
        <ListGroup.Item><strong>Task: </strong>{title}</ListGroup.Item>
        <ListGroup.Item><strong>Priority: </strong>{priority}</ListGroup.Item>
        <ListGroup.Item><strong>Estimated Time: </strong>{estimatedTime} mins</ListGroup.Item>
        <ListGroup.Item><p><strong>Created:</strong>{formatDistanceToNow(new Date(todo.createdAt), {addSuffix: true })}</p></ListGroup.Item>
      </ListGroup>
    </Card>
    <div>
    <span onClick={handleClick} className='material-symbols-outlined'>delete</span>
    </div>
    </div>
  );
}

export default TodoDetails