import TodoItem from "./TodoItem"

const TodoList = ({todos, changeTodoCompleted, removeTodo}) => {

    return (
    <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} 
                                    changeTodoCompleted={changeTodoCompleted} 
                                    removeTodo={removeTodo}/>)}
    </ul>
    )
}

export default TodoList