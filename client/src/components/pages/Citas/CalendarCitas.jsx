import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

const events = [
  {
    title: 'Meeting',
    start: new Date(2025, 10, 9, 6, 30),
    end: new Date(2025, 10, 9, 9, 30),
  },
];

const CalendarCitas = ({ citasProgramadas, isProgamable, handleOpen }) => {
  const handleSelect = (info) => {
    handleOpen('add');
  };

  return (
    <FullCalendar
      height={600}
      allDaySlot={false}
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      initialView="timeGridWeek"
      selectable={isProgamable}
      selectMirror={true}
      select={(arg) => handleSelect(arg)}
      events={citasProgramadas}
      eventContent={renderEventContent}
      headerToolbar={{
        right: 'today timeGridDay,timeGridWeek prev,next',
      }}
      titleFormat={{
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }}
      buttonText={{
        day: 'Dia',
        week: 'Semana',
        today: 'Hoy',
      }}
      // locale="es"
      timeZone="America/Bogota"
      nowIndicator={true}
      eventTimeFormat={{
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
      }}
      stickyHeaderDates={true}
      eventClick={(args) => console.log(args)}
    />
  );
};
// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      {console.log(eventInfo)}
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}
export default CalendarCitas;
