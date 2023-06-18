import { useState } from "react"
import s from './Calendar.module.scss'
import { format, startOfWeek, addDays, isSameDay } from "date-fns";

const CalendarDays = ({currentDay}) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const dateFormat = "d";
    const startDate = startOfWeek(currentDay, { weekStartsOn: 1 })
    let days = []  

    for (let i = 0; i < 7; i++) {
        days.push(addDays(startDate, i))
    }

    const onDateClickHandle = (day) => {
        const dayStr = format(day, "ccc dd MMM yy")
        console.log(dayStr)
        setSelectedDate(day);
    };

    let daysRow = days.map((day) => {
        let formattedDay = format(day, dateFormat)
        return <div key={day} className={isSameDay(day, selectedDate) ? s.selected_day
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