import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from "../UI/Button";

const EventItem = (props) => {
  const { title, image, date, id } = props;

  const dateString = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  return (
    <ListItem>
      <ImageWrap>
        <img src={`/` + image} alt={title} />
      </ImageWrap>
      <RightText>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{dateString}</time>
          </div>
        </div>
        <ButtonWrap>
          <Button link={exploreLink}>Explore event</Button>
        </ButtonWrap>
      </RightText>
    </ListItem>
  );
};

export default EventItem;

const ListItem = styled.li`
  display: flex;
  border: 1px solid black;
  max-width: 700px;
  margin: 0 auto;
  margin: 1rem;
`;

const ImageWrap = styled.div`
  width: 50%;

  img {
    max-width: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    display: block;
  }
`;

const RightText = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.5rem;
`;

const ButtonWrap = styled.div`
  align-self: flex-end;
  margin-bottom: 2rem;
  width: 200px;
`;
