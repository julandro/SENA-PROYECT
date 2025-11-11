import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { useEffect } from 'react';

const events = [
  {
    title: 'Meeting',
    start: new Date(2025, 10, 9, 6, 30),
    end: new Date(2025, 10, 9, 9, 30),
  },
];

/**
 *
 * @param {Object} params
 * @param {Array<object>} params.listCitas
 * @param {Function} params.handleSelect
 * @returns
 */
const CalendarCitas = ({
  listCitas,
  isProgramable,
  handleSelect,
  handleEventClick,
}) => {
  return (
    <FullCalendar
      height={600}
      allDaySlot={false}
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      initialView="timeGridWeek"
      selectable={isProgramable}
      selectMirror={true}
      select={(arg) => handleSelect(arg)}
      events={listCitas}
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
        hourCycle: 'h12',
      }}
      stickyHeaderDates={true}
      eventClick={handleEventClick}
      eventMouseEnter={(info) => {
        info.el.style.cursor = 'pointer';
      }}
      locale="es"
      dayHeaderFormat={{
        weekday: 'long',
        day: 'numeric',
      }}
      slotLabelFormat={{ hour: 'numeric', hourCycle: 'h12' }}
    />
  );
};
// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}
export default CalendarCitas;
