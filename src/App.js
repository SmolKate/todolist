import { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import WeekCalendar from './components/Calendar/WeekCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';

function App() {

  const [text, setText] = useState('')
  const selectedDay = useSelector(state => state.todos.selectedDay)
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text, day: selectedDay}))
    setText('')
  }
  const titleFormat = { 
    month: 'long',
    year: '2-digit',
    day: 'numeric',
    weekday: '2-digit'
  }
  return (
    <div className='App'>
      <WeekCalendar />
      <TodoList />
      {/* <AddButton />
      <Footer /> */}

      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
    </div>
  );
}

export default App;
