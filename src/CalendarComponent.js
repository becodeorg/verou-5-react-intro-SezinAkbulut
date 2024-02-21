import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ todos }) => {
  const events = todos.map((todo) => ({
    title: todo.text,
    start: new Date(todo.fromDate),
    end: new Date(todo.toDate),
  }));

  console.log(events);

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar localizer={localizer} events={events} />
    </div>
  );
};

export default CalendarComponent;
