import { format } from "date-fns";
import s from './Calendar.module.scss'

const CalendarHeader = ({currentDay}) => {
    const dateFormat = "MMM, yyyy";
    return (
      <div className={s.header}>
        <div className={s.today_ref}>Today</div>
        <div className={s.date_header}>
          {format(currentDay, dateFormat)}
        </div>
      </div>
    );
  };

export default CalendarHeader