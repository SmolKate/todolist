const TodoItem = ({id, text, completed, changeTodoCompleted, removeTodo}) => {
    return (
        <li key={id}>
          <input type='checkbox' checked={completed} onChange={() => changeTodoCompleted(id)}></input>
          <span>{text}</span>
          <span className='delete' onClick={() => removeTodo(id)}>&#10008;</span>
        </li>
    )
}

export default TodoItem