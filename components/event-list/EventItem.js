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
        <InfoEvent>
          <h2>{title}</h2>
          <div>
            <time>{dateString}</time>
          </div>
        </InfoEvent>
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
width: 100%;
  max-width: 100%;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;

`;

const ButtonWrap = styled.div`
  align-self: flex-end;
  margin-bottom: 1rem;
  width: 190px;
  
`;

const InfoEvent = styled.div`
    width: 80%;
`
