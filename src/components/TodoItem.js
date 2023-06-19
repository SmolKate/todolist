import { useDispatch, useSelector } from 'react-redux'
import {removeTodo, changeTodoCompleted} from '../store/todoSlice'

const TodoItem = ({id, text, completed}) => {

  const selectedDay = useSelector(state => state.todos.selectedDay)
  const dispatch = useDispatch()

    return (
        <li key={id}>
          <input type='checkbox' checked={completed} onChange={() => dispatch(changeTodoCompleted({id, day: selectedDay}))}></input>
          <span>{text}</span>
          <span className='delete' onClick={() => dispatch(removeTodo({id, day: selectedDay}))}>&#10008;</span>
        </li>
    )
}

export default TodoItem