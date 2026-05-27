import { useEffect, useState } from "react";
import "./AdminMessages.css";

function AdminMessages() {

  const [messages, setMessages] = useState([]);

  // FETCH CONTACT MESSAGES
  const getMessages = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/contact"
      );

      const data = await response.json();

      setMessages(data);

    } catch(error) {

      console.log(error);
    }
  };



  // DELETE MESSAGE
  const deleteMessage = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if(!confirmDelete) return;

    try {

      await fetch(
        `http://localhost:8080/api/contact/${id}`,
        {
          method:"DELETE"
        }
      );

      getMessages();

    } catch(error) {

      console.log(error);
    }
  };



  useEffect(() => {

    getMessages();

  }, []);




  return (

    <div className="messages-page">

      {/* TOP HEADER */}

      <div className="messages-header">

        <div>
          <h1>Contact Messages</h1>
          <p>
            <h2> Manage all contact form submissions here.</h2>
          </p>
        </div>

        <div className="message-count">
          {messages.length} Messages
        </div>

      </div>



      {/* TABLE */}

      <div className="messages-table-container">

        <table className="messages-table">

          <thead>

            <tr>

              <th>ID</th>
              <th>Full Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>

            </tr>

          </thead>



          <tbody>

            {
              messages.map((msg) => (

                <tr key={msg.id}>

                  <td>{msg.id}</td>

                  <td>
                    <div className="user-box">
                      <div className="user-avatar">
                        {msg.fullname.charAt(0)}
                      </div>

                      <span>
                        {msg.fullname}
                      </span>
                    </div>
                  </td>

                  <td>{msg.contactnumber}</td>

                  <td>{msg.email}</td>

                  <td className="message-text">
                    {msg.message}
                  </td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() => deleteMessage(msg.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminMessages;