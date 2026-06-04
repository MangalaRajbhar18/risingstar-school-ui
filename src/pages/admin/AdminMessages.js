import { useEffect, useState } from "react";
import "./AdminMessages.css";

function AdminMessages() {

  const [messages, setMessages] = useState([]);

  // FETCH CONTACT MESSAGES

  const getMessages = async () => {

    try {

      const response = await fetch(
        "https://rising-star-public-school.onrender.com/api/contact"
      );

      const data = await response.json();

      setMessages(data);

    } catch (error) {

      console.log(error);
    }
  };



  // DELETE MESSAGE

  const deleteMessage = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `https://rising-star-public-school.onrender.com/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      getMessages();

    } catch (error) {

      console.log(error);
    }
  };



  // HANDLE ACTIONS

  const handleAction = (id, action) => {

    if (action === "followup") {

      setMessages(
        messages.map((msg) =>
          msg.id === id
            ? { ...msg, status: "Follow Up" }
            : msg
        )
      );
    }

    if (action === "confirm") {

      setMessages(
        messages.map((msg) =>
          msg.id === id
            ? { ...msg, status: "Confirmed" }
            : msg
        )
      );
    }

    if (action === "delete") {

      deleteMessage(id);
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

          <h2>
            Manage all contact form submissions here.
          </h2>

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

            {messages.map((msg) => (

              <tr key={msg.id}>

                <td>{msg.id}</td>

                <td>

                  <div className="user-box">

                    <div className="user-avatar">

                      {(msg.fullname || "U")
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                    <span>
                      {msg.fullname || "Unknown User"}
                    </span>

                  </div>

                </td>

                <td>{msg.contactnumber || "N/A"}</td>

                <td>{msg.email || "N/A"}</td>

                <td className="message-text">
                  {msg.message || "No message"}
                </td>

                <td>

                  <select
                    className={
                      msg.status === "Confirmed"
                        ? "action-dropdown confirmed"
                        : msg.status === "Follow Up"
                        ? "action-dropdown followup"
                        : "action-dropdown"
                    }
                    value={
                      msg.status === "Confirmed"
                        ? "confirm"
                        : msg.status === "Follow Up"
                        ? "followup"
                        : ""
                    }
                    onChange={(e) =>
                      handleAction(
                        msg.id,
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select Action
                    </option>

                    <option value="followup">
                      Follow Up
                    </option>

                    <option value="confirm">
                      Confirm
                    </option>

                    <option value="delete">
                      Delete
                    </option>

                  </select>

                </td>

              </tr>
            ))}

          </tbody>

        </table>



        {messages.length === 0 && (

          <div
            style={{
              textAlign: "center",
              padding: "20px",
              fontWeight: "bold",
            }}
          >

            No messages found.

          </div>

        )}

      </div>

    </div>
  );
}

export default AdminMessages;