import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import InputField from './InputField';


function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length !== 0) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }

  }

  const removeTodo = (todoId) => {
    console.log(todos)
    setTodos(todos.filter(todo => todo.id !== todoId))
    console.log(todos)

  }

  const changeTodoCompleted = (todoId) => {
    let newTodos = todos.map(todo => {
      if (todo.id !== todoId) return todo
      return {
        ...todo,
        completed: !todo.completed
      }
    })
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
      <TodoList todos={todos} changeTodoCompleted={changeTodoCompleted} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
