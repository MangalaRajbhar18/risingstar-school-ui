import { useEffect, useState } from "react";
import "./AdminEvents.css";
import Swal from "sweetalert2";

function AdminEvents() {

  const [events, setEvents] = useState([]);

  const [editId, setEditId] = useState(null);

  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
    image: ""
  });

  // FETCH EVENTS

  const fetchEvents = async () => {

    try {

      const response = await fetch(
        "https://rising-star-public-school.onrender.com/api/events"
      );

      const data = await response.json();

      setEvents(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchEvents();

  }, []);

  // HANDLE INPUT

  const handleChange = (e) => {

    setEventData({

      ...eventData,

      [e.target.name]: e.target.value
    });
  };

  // ADD + UPDATE EVENT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let response;

      if (editId) {

        response = await fetch(
          `https://rising-star-public-school.onrender.com/api/events/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
          }
        );

      } else {

        response = await fetch(
          "https://rising-star-public-school.onrender.com/api/events",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
          }
        );
      }

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: editId
            ? "Event Updated Successfully!"
            : "Event Added Successfully!",
          showConfirmButton: false,
          timer: 1500
        });

        setEventData({
          title: "",
          date: "",
          description: "",
          image: ""
        });

        setEditId(null);

        fetchEvents();
      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong."
      });
    }
  };

  // EDIT EVENT

  const editEvent = (event) => {

    setEventData({
      title: event.title,
      date: event.date,
      description: event.description,
      image: event.image
    });

    setEditId(event.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // DELETE EVENT

  const deleteEvent = async (id) => {

    const result = await Swal.fire({
      title: "Delete Event?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete"
    });

    if (!result.isConfirmed) return;

    try {

      const response = await fetch(
        `https://rising-star-public-school.onrender.com/api/events/${id}`,
        {
          method: "DELETE"
        }
      );

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: "Deleted Successfully!",
          showConfirmButton: false,
          timer: 1500
        });

        fetchEvents();
      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed!",
        text: "Unable to delete event."
      });
    }
  };

  return (

    <div className="admin-events-page">

      <div className="container-fluid">

        {/* TOP */}

        <div className="admin-events-top">

          <h2>
            School Events Management
          </h2>

          <p>
            Add, update and manage school event activities.
          </p>

        </div>

        {/* FORM */}

        <div className="event-form-card">

          <h3>

            {editId ? "Update Event" : "Add New Event"}

          </h3>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Event Title"
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6">

                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Enter image name (example: event1.jpg)"
              name="image"
              value={eventData.image}
              onChange={handleChange}
              required
            />

            <textarea
              rows="4"
              className="form-control"
              placeholder="Enter Event Description"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              required
            ></textarea>

            <button className="upload-btn">

              {editId ? "Update Event" : "Add Event"}

            </button>

          </form>

        </div>

        {/* EVENTS */}

        <div className="events-grid">

          {events.map((event) => (

            <div
              className="admin-event-card"
              key={event.id}
            >

              <img
                src={`/images/${event.image}`}
                alt={event.title}
                className="admin-event-image"
              />

              <div className="admin-event-content">

                <span className="event-date">

                  📅 {event.date}

                </span>

                <h4>
                  {event.title}
                </h4>

                <p>
                  {event.description}
                </p>

                <button
                  className="edit-btn"
                  onClick={() => editEvent(event)}
                >
                  Edit Event
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete Event
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminEvents;