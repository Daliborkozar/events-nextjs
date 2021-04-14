import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
