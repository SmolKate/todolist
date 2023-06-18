import { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import WeekCalendar from './components/Calendar/WeekCalendar';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction"

function App() {
  const [text, setText] = useState('')
  const [value, onChange] = useState(new Date())

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
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
      {/* <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView = "dayGridWeek"
        titleFormat = {titleFormat}
        dateClick={(arg) => console.log(arg.dateStr)}
      />       */}
      <TodoList />
      {/* <AddButton />
      <Footer /> */}

      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
    </div>
  );
}

export default App;
