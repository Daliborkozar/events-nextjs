import React from "react";
import Link from 'next/link'

const EventItem = (props) => {
const { title,image,date,id } = props

const dateString = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={`/` + image} alt={title}/>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{dateString}</time>
          </div>
        </div>
        <div>
            <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
