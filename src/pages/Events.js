import { useEffect, useState } from "react";
import "../styles/Events.css";

function Events() {

  const [events, setEvents] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);




  // FETCH EVENTS

  const fetchEvents = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/events"
      );

      const data = await response.json();

      console.log(data);

      setEvents(data);

    } catch (error) {

      console.log(error);
    }
  };




  useEffect(() => {

    fetchEvents();

  }, []);




  return (

    <div className="events-page">

      {/* HERO SECTION */}

      <div className="events-hero">

        <div className="container">

          <h1>
            School Events
          </h1>

          <p>
            Explore memorable moments, celebrations,
            competitions and activities happening in our school.
          </p>

        </div>

      </div>
      {/* EVENTS SECTION */}

      <div className="container py-5">

        <div className="events-grid">

          {events.map((event) => (

            <div className="event-card" key={event.id}>

              {/* IMAGE */}

              <img
                src={`/images/${event.image}`}
                alt={event.title}
                className="event-image"
                onClick={() =>
                  setSelectedImage(event.image)
                }
              />





              {/* CONTENT */}

              <div className="event-content">

                <span className="event-date">

                  📅 {event.date}

                </span>
                <h3>
                  {event.title}
                </h3>
                <p>
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
       {/* FULL IMAGE MODAL */}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON */}

          <span className="close-modal">

            ✕
          </span>
          {/* FULL IMAGE */}

          <img
            src={`/images/${selectedImage}`}
            alt="Full View"
            className="full-image"
          />

        </div>
      )}

    </div>
  );
}

export default Events;