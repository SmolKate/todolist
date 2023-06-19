import { useSelector } from "react-redux"
import s from './todoList.module.scss'
import TodoItem from "./TodoItem"

const TodoList = () => {
    const selectedDay = useSelector(state => state.todos.selectedDay)
    const todoList = useSelector(state => state.todos.todoList)

    let todos = [] 
    if (!!todoList.find(obj => obj.day === selectedDay)) {
        todos = todoList.find(obj => obj.day === selectedDay).todos
    }

    return (
        <div className={s.todo_list}>
            <h2>Tasks for {selectedDay}</h2>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    
    )
}

export default TodoList