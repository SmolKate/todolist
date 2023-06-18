import { useState } from "react";
import s from './Calendar.module.scss'
import { addWeeks, subWeeks } from "date-fns";
import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import CalendarWeekDays from './CalendarWeekDays'
import ChangeWeekButton from './ChangeWeekButton'

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentDay(subWeeks(currentDay, 1));
    }
    if (btnType === "next") {
      setCurrentDay(addWeeks(currentDay, 1));
    }
  };
  
  return (
    <div className={s.calendar}>
        <CalendarHeader currentDay={currentDay}/>
        <CalendarDays currentDay={currentDay}/>
        <CalendarWeekDays currentDay={currentDay}/>
        <ChangeWeekButton changeWeekHandle={changeWeekHandle} type='prev'/>
        <ChangeWeekButton changeWeekHandle={changeWeekHandle} type='next'/>
    </div>
  );
};

export default Calendar;
