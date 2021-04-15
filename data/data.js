const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Queen tribute',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
      date: '2021-05-12',
      image: 'images/event1.jpeg',
      isFeatured: true,
      price: 'Free'
    },
    {
        id: 'e2',
        title: 'MrKey i Jamby',
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        
        date: '2021-05-30',
        image: 'images/event2.jpeg',
        isFeatured: true,
        price: 'Free'
      },
      {
        id: 'e3',
        title: 'Fat Walk',
        description:
          'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
        date: '2022-04-10',
        image: 'images/event3.jpeg',
        isFeatured: true,
        price: 'Free'
      },
    ];

    export function getFeaturedEvents() {
        return DUMMY_EVENTS.filter((event) => event.isFeatured);
      }
      
      export function getAllEvents() {
        return DUMMY_EVENTS;
      }
      
      export function getFilteredEvents(dateFilter) {
        const { year, month } = dateFilter;
      
        let filteredEvents = DUMMY_EVENTS.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
        });
      
        return filteredEvents;
      }
      
      export function getEventById(id) {
        return DUMMY_EVENTS.find((event) => event.id === id);
        
      }