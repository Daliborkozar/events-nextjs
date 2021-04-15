import React from 'react'
import {useRouter} from 'next/router'
import { getEventById } from '../../data/data'

const EventDetailPage = (props) => {

    
    const router = useRouter()
    //eventid
    console.log(router.query.eventId)


    const eventId = router.query.eventId

    const event = getEventById(eventId)

    if(!event) {
        return <p>No Event Found</p>
    }

    return (
        <>
           <h1>{event.title}</h1> 
           <img src={`/` + event.image} alt={event.title}/> 
           <p>{event.date}</p>
           <p>{event.description}</p>
    <p>{event.price}</p>
        </>
    )
}

export default EventDetailPage
