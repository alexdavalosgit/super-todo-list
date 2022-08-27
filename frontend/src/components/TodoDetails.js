import React from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap'

function TodoDetails({ todo }) {

  const { title, priority, estimatedTime } = todo;
  return (
    <Card style={{ width: '18rem' }} className='mb-3'>
      <ListGroup>
        <ListGroup.Item><strong>Task: </strong>{title}</ListGroup.Item>
        <ListGroup.Item><strong>Priority: </strong>{priority}</ListGroup.Item>
        <ListGroup.Item><strong>Estimated Time: </strong>{estimatedTime} mins</ListGroup.Item>
      </ListGroup>
{/*       <div className="d-flex p-2 justify-content-center align-items-center">
        <Button className=''>Edit</Button>
        <Button className="btn-danger">Delete</Button>
      </div> */}

    </Card>
  );
}

export default TodoDetails