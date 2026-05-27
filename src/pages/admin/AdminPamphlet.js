import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./AdminPamphlet.css";

function AdminPamphlet() {

  const [pamphlets, setPamphlets] = useState([]);

  const [image, setImage] = useState("");





  // FETCH

  const fetchPamphlets = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/pamphlets"
      );

      const data = await response.json();

      setPamphlets(data);

    } catch(error){

      console.log(error);
    }
  };





  useEffect(() => {

    fetchPamphlets();

  }, []);





  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(

        "http://localhost:8080/api/pamphlets",

        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({ image })
        }
      );





      if(response.ok){

        Swal.fire({

          icon:"success",

          title:"Pamphlet Added",

          showConfirmButton:false,

          timer:1500
        });





        setImage("");

        fetchPamphlets();
      }

    } catch(error){

      console.log(error);
    }
  };





  // DELETE

  const deletePamphlet = async(id) => {

    try {

      const response = await fetch(

        `http://localhost:8080/api/pamphlets/${id}`,

        {
          method:"DELETE"
        }
      );





      if(response.ok){

        Swal.fire({

          icon:"success",

          title:"Pamphlet Deleted",

          showConfirmButton:false,

          timer:1500
        });

        fetchPamphlets();
      }

    } catch(error){

      console.log(error);
    }
  };





  return (

    <div className="admin-pamphlet-page">

      <div className="container-fluid">




        {/* TOP */}

        <div className="pamphlet-top">

          <h1>
            Pamphlet Management
          </h1>

          <p>
            Add school posters and pamphlets.
          </p>

        </div>








        {/* FORM */}

        <div className="pamphlet-form-card">

          <h3>
            Add Pamphlet
          </h3>





          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Pamphlet Image Name"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              required
            />





            <button className="pamphlet-btn">

              Add Pamphlet

            </button>

          </form>

        </div>








        {/* GRID */}

        <div className="pamphlet-grid">

          {pamphlets.map((pamphlet) => (

            <div
              className="pamphlet-card"
              key={pamphlet.id}
            >

              <img
                src={`/images/${pamphlet.image}`}
                alt="Pamphlet"
                className="pamphlet-admin-image"
              />





              <button
                className="delete-pamphlet-btn"
                onClick={() =>
                  deletePamphlet(pamphlet.id)
                }
              >

                Delete

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminPamphlet;