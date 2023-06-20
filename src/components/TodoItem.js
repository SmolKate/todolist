import { useDispatch, useSelector } from 'react-redux'
import s from './todoList.module.scss'
import {removeTodo, changeTodoCompleted} from '../store/todoSlice'

const TodoItem = ({id, text, completed}) => {

  const selectedDay = useSelector(state => state.todos.selectedDay)
  const dispatch = useDispatch()

    return (
        <li className={s.todo_item} key={id}>
            <input type='checkbox' id={id} checked={completed} onChange={() => dispatch(changeTodoCompleted({id, day: selectedDay}))}></input>
            <label for={id} className={s.container}></label>

            {/* <span class="checkmark"></span> */}
            <span>{text}</span>
          
          
          <span className={s.delete} onClick={() => dispatch(removeTodo({id, day: selectedDay}))}>&#10008;</span>
        </li>
    )
}

export default TodoItem