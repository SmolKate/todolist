import { format } from "date-fns";
import s from './Calendar.module.scss'

const CalendarHeader = ({currentDay}) => {
    const dateFormat = "MMM, yyyy";
    return (
      <div className={s.header}>
        <div className="col col-center">
          <span>{format(currentDay, dateFormat)}</span>
        </div>
      </div>
    );
  };

export default CalendarHeader