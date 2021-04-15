import React from "react";
import EventItem from "./EventItem";
import styled from 'styled-components'

const EventList = (props) => {
  const { items } = props;

  return (
    <List>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          date={event.date}
          image={event.image}
        />
      ))}
    </List>
  );
};

export default EventList;

const List = styled.ul`
    margin: 0 auto;
`
