import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

//   const changeMonthHandle = (btnType) => {
//     if (btnType === "prev") {
//       setCurrentMonth(subMonths(currentMonth, 1));
//     }
//     if (btnType === "next") {
//       setCurrentMonth(addMonths(currentMonth, 1));
//     }
//   };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
    //   setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
    //   setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMM, yyyy";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    // const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    // let formattedDate = "";

    for (let i = 0; i < 7; i++) {
        days.push(
            <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(day, "ccc dd MMM yy");
              onDateClickHandle(day, dayStr);
            }}
          >
            <span className="number">{format(addDays(startDate, i), dateFormat)}</span>
          </div>
        );
    }

    // while (day <= endDate) {
    //   for (let i = 0; i < 7; i++) {
    //     formattedDate = format(day, dateFormat);
    //     const cloneDay = day;
    //     days.push(
    //       <div
    //         className={`col cell ${
    //           isSameDay(day, new Date())
    //             ? "today"
    //             : isSameDay(day, selectedDate)
    //             ? "selected"
    //             : ""
    //         }`}
    //         key={day}
    //         onClick={() => {
    //           const dayStr = format(cloneDay, "ccc dd MMM yy");
    //           onDateClickHandle(cloneDay, dayStr);
    //         }}
    //       >
    //         <span className="number">{formattedDate}</span>
    //         {/* <span className="bg">{formattedDate}</span> */}
    //       </div>
    //     );
    //     day = addDays(day, 1);
    //   }

    //   rows.push(
    //     <div className="row" key={day}>
    //       {days}
    //     </div>
    //   );
    //   days = [];
    // }
    // return <div className="body">{rows}</div>;
    console.log(days)
    return <div className="body"><div className="row">{days}</div></div>;

  };
  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
      </div>
    );
  };
  return (
    <div className="calendar">
        {renderHeader()}
            {renderCells()}
       
        
        {renderDays()}
        {renderFooter()}
    </div>
  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
