import { useDispatch } from 'react-redux'
import {removeTodo, changeTodoCompleted} from '../store/todoSlice'

const TodoItem = ({id, text, completed}) => {
  
  const dispatch = useDispatch()

    return (
        <li key={id}>
          <input type='checkbox' checked={completed} onChange={() => dispatch(changeTodoCompleted({id}))}></input>
          <span>{text}</span>
          <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&#10008;</span>
        </li>
    )
}

export default TodoItem