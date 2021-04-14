import {getFeaturedEvents} from '../data/data'
import EventList from '../components/event-list/EventList'

export default function Home() {

  const featuredEvents = getFeaturedEvents()

  return (
    <div >
      
        <EventList items={featuredEvents}/>
      
    
      
    </div>
  )
}
