import { createSlice } from "@reduxjs/toolkit"
import { format, startOfWeek, addDays, isSameDay } from "date-fns"


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        selectedDay: format(new Date(), 'dd MMM yy'),
        todoList: [{
            day: '',
            todos: [],
        }]
    },
    reducers: {
        addTodo (state, action) {
            let targetDay = state.todoList.find(obj => obj.day === action.payload.day)
            if (!!targetDay) {
                targetDay.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    completed: false
                })
            }
            state.todoList.push({
                day: action.payload.day,
                todos: [{
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    completed: false
                }]
            })
        },
        removeTodo (state, action) {
            state.todoList.find(obj => obj.day === action.payload.day).todos = state.todoList.find(obj => obj.day === action.payload.day).todos.filter(todo => todo.id !== action.payload.id)
        },
        changeTodoCompleted (state, action) {
            let changedTodo = state.todoList.find(obj => obj.day === action.payload.day).todos.find(todo => todo.id === action.payload.id)
            changedTodo.completed = !changedTodo.completed
        },
        setSelectedDate (state, action) {
            console.log(action)
            state.selectedDay = action.payload.dayStr
        }
    }
})

export const {addTodo, removeTodo, changeTodoCompleted, setSelectedDate} = todoSlice.actions
export default todoSlice.reducer