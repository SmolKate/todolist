import { format, startOfWeek, addDays } from "date-fns"
import s from './Calendar.module.scss'

const CalendarWeekDays = ({currentDay}) => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentDay, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className={s.weekDays}>{days}</div>;
}

export default CalendarWeekDays