import { useDispatch, useSelector } from 'react-redux'
import s from './Calendar.module.scss'
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { setSelectedDate } from '../../store/todoSlice';

const CalendarDays = ({currentDay}) => {

    const dispatch = useDispatch()
    const selectedDay = useSelector(state => state.todos.selectedDay)

    const dateFormat = "d";
    const startDate = startOfWeek(currentDay, { weekStartsOn: 1 })
    let days = []  

    for (let i = 0; i < 7; i++) {
        days.push(addDays(startDate, i))
    }

    const onDateClickHandle = (day) => {
        const dayStr = format(day, "dd MMM yy")
        console.log(dayStr)
        dispatch(setSelectedDate({dayStr}))
    };

    let daysRow = days.map((day) => {
        let formattedDay = format(day, dateFormat)
        return <div key={day} className={format(day, 'dd MMM yy') === selectedDay ? s.selected_day
                                : isSameDay(day, new Date()) ? s.today
                                : s.day}
                        onClick={() => onDateClickHandle(day)}>
                    <span className={s.number}>{formattedDay}</span>
                </div>})
   
    return <div className={s.body}>
                {daysRow}
            </div>;
}

export default CalendarDays