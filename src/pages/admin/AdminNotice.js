import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./AdminNotice.css";

function AdminNotice() {

  const [notices, setNotices] = useState([]);

  const [editId, setEditId] = useState(null);

  const [noticeData, setNoticeData] = useState({

    title:"",
    description:"",
    date:"",
    noticeImage:""
  });





  // FETCH

  const fetchNotices = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/notices"
      );

      const data = await response.json();

      setNotices(data);

    } catch(error){

      console.log(error);
    }
  };





  useEffect(() => {

    fetchNotices();

  }, []);





  // CHANGE

  const handleChange = (e) => {

    setNoticeData({

      ...noticeData,

      [e.target.name]:e.target.value
    });
  };





  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let url = "http://localhost:8080/api/notices";

      let method = "POST";





      // UPDATE

      if(editId){

        url = `http://localhost:8080/api/notices/${editId}`;

        method = "PUT";
      }





      const response = await fetch(url,{

        method:method,

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify(noticeData)
      });





      if(response.ok){

        Swal.fire({

          icon:"success",

          title: editId
          ? "Notice Updated"
          : "Notice Added",

          showConfirmButton:false,

          timer:1500
        });





        setNoticeData({

          title:"",
          description:"",
          date:"",
          noticeImage:""
        });





        setEditId(null);

        fetchNotices();
      }

    } catch(error){

      console.log(error);
    }
  };





  // DELETE

  const deleteNotice = async(id) => {

    try {

      const response = await fetch(

        `http://localhost:8080/api/notices/${id}`,

        {
          method:"DELETE"
        }
      );





      if(response.ok){

        Swal.fire({

          icon:"success",

          title:"Notice Deleted",

          showConfirmButton:false,

          timer:1500
        });

        fetchNotices();
      }

    } catch(error){

      console.log(error);
    }
  };





  // EDIT

  const editNotice = (notice) => {

    setEditId(notice.id);

    setNoticeData({

      title:notice.title,
      description:notice.description,
      date:notice.date,
      noticeImage:notice.noticeImage
    });
  };





  return (

    <div className="admin-notice-page">

      <div className="container-fluid">




        {/* TOP */}

        <div className="notice-top">

          <h1>
            Notice Management
          </h1>

          <p>
            Add school notices here.
          </p>

        </div>








        {/* FORM */}

        <div className="notice-form-card">

          <h3>

            {editId
            ? "Update Notice"
            : "Add New Notice"}

          </h3>





          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="form-control"
              placeholder="Notice Title"
              name="title"
              value={noticeData.title}
              onChange={handleChange}
              required
            />





            <textarea
              className="form-control"
              placeholder="Notice Description"
              name="description"
              value={noticeData.description}
              onChange={handleChange}
              required
            ></textarea>





            <input
              type="date"
              className="form-control"
              name="date"
              value={noticeData.date}
              onChange={handleChange}
              required
            />





            <input
              type="text"
              className="form-control"
              placeholder="Notice Image"
              name="noticeImage"
              value={noticeData.noticeImage}
              onChange={handleChange}
            />





            <button className="notice-btn">

              {editId
              ? "Update Notice"
              : "Add Notice"}

            </button>

          </form>

        </div>








        {/* GRID */}

        <div className="notice-grid">

          {notices.map((notice) => (

            <div
              className="notice-card-admin"
              key={notice.id}
            >

              <img
                src={`/images/${notice.noticeImage}`}
                alt={notice.title}
                className="notice-small-image"
              />





              <div className="notice-content">

                <h4>
                  {notice.title}
                </h4>





                <p>
                  {notice.description}
                </p>





                <span>
                  📅 {notice.date}
                </span>





                <div className="notice-actions">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      editNotice(notice)
                    }
                  >

                    Update

                  </button>





                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteNotice(notice.id)
                    }
                  >

                    Delete

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminNotice;