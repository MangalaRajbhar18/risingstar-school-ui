import { useEffect, useState } from "react";
import "./AdminEvents.css";

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
        "http://localhost:8080/api/events"
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



      // UPDATE EVENT

      if(editId){

        response = await fetch(

          `http://localhost:8080/api/events/${editId}`,

          {
            method:"PUT",

            headers:{
              "Content-Type":"application/json"
            },

            body:JSON.stringify(eventData)
          }
        );
      }



      // ADD EVENT

      else{

        response = await fetch(

          "http://localhost:8080/api/events",

          {
            method:"POST",

            headers:{
              "Content-Type":"application/json"
            },

            body:JSON.stringify(eventData)
          }
        );
      }



      if(response.ok){

        alert(editId ? "Event Updated Successfully" : "Event Added Successfully");



        setEventData({

          title:"",
          date:"",
          description:"",
          image:""
        });



        setEditId(null);

        fetchEvents();
      }

    } catch(error){

      console.log(error);
    }
  };




  // EDIT EVENT

  const editEvent = (event) => {

    setEventData({

      title:event.title,
      date:event.date,
      description:event.description,
      image:event.image
    });

    setEditId(event.id);
  };




  // DELETE EVENT

  const deleteEvent = async (id) => {

    try {

      const response = await fetch(

        `http://localhost:8080/api/events/${id}`,

        {
          method:"DELETE"
        }
      );



      if(response.ok){

        alert("Event Deleted Successfully");

        fetchEvents();
      }

    } catch(error){

      console.log(error);
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
            <h3>Add, update and manage school event activities.</h3>
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

            <div className="admin-event-card" key={event.id}>

              {/* IMAGE */}

              <img
                src={`/images/${event.image}`}
                alt={event.title}
                className="admin-event-image"
              />
                     {/* CONTENT */}

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
                            {/* EDIT BUTTON */}

                <button
                  className="edit-btn"
                  onClick={() => editEvent(event)}
                >

                  Edit Event

                </button>





                {/* DELETE BUTTON */}

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