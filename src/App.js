import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  const changeTodoCompleted = (todoId) => {
    // let newTodos = todos.map(todo => {
    //   if (todo.id !== todoId) return todo
    //   return {
    //     ...todo,
    //     completed: !todo.completed
    //   }
    // })
    // setTodos(newTodos)
  }

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      <TodoList />
    </div>
  );
}

export default App;
