// Componente de la página del evento
const EventPage = ({ event }) => {
    return (
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>
    );
  };
  
  export default EventPage;