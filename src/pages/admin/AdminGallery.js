import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./AdminGallery.css";

function AdminGallery() {

  const [gallery, setGallery] = useState([]);

  const [galleryData, setGalleryData] = useState({

    title:"",
    album:"",
    image:""
  });




  // FETCH GALLERY

  const fetchGallery = async () => {

    try {

      const response = await fetch(
        "https://rising-star-public-school.onrender.com/api/gallery"
      );

      const data = await response.json();

      setGallery(data);

    } catch(error){

      console.log(error);
    }
  };




  useEffect(() => {

    fetchGallery();

  }, []);




  // HANDLE INPUT

  const handleChange = (e) => {

    setGalleryData({

      ...galleryData,

      [e.target.name]:e.target.value
    });
  };




  // ADD PHOTO

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(

        "https://rising-star-public-school.onrender.com/api/gallery",

        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify(galleryData)
        }
      );



      if(response.ok){

        Swal.fire({

          position:"top-end",

          icon:"success",

          title:"Photo Added Successfully",

          showConfirmButton:false,

          timer:1500
        });




        setGalleryData({

          title:"",
          album:"",
          image:""
        });




        fetchGallery();
      }

    } catch(error){

      console.log(error);
    }
  };




  // DELETE PHOTO

  const deleteImage = async (id) => {

    try {

      const response = await fetch(

        `https://rising-star-public-school.onrender.com/api/gallery/${id}`,

        {
          method:"DELETE"
        }
      );



      if(response.ok){

        Swal.fire({

          position:"top-end",

          icon:"success",

          title:"Photo Deleted Successfully",

          showConfirmButton:false,

          timer:1500
        });




        fetchGallery();
      }

    } catch(error){

      console.log(error);
    }
  };




  return (

    <div className="admin-gallery-page">

      <div className="container-fluid">

        {/* TOP */}

        <div className="gallery-top">

          <h1>
            Gallery Management
          </h1>

          <p>
            Add and manage school gallery albums & photos.
          </p>

        </div>





        {/* FORM */}

        <div className="gallery-form-card">

          <h3>
            Add New Photo
          </h3>



          <form onSubmit={handleSubmit}>

            {/* TITLE */}

            <input
              type="text"
              className="form-control"
              placeholder="Enter Photo Title"
              name="title"
              value={galleryData.title}
              onChange={handleChange}
              required
            />





            {/* ALBUM */}

            <input
              type="text"
              className="form-control"
              placeholder="Enter Album Name (example: Food Stall)"
              name="album"
              value={galleryData.album}
              onChange={handleChange}
              required
            />





            {/* IMAGE */}

            <input
              type="text"
              className="form-control"
              placeholder="Enter image name (example: photo1.jpg)"
              name="image"
              value={galleryData.image}
              onChange={handleChange}
              required
            />





            <button className="gallery-btn">

              Add Photo

            </button>

          </form>

        </div>






        {/* GALLERY GRID */}

        <div className="admin-gallery-grid">

          {gallery.map((photo) => (

            <div className="admin-gallery-card" key={photo.id}>

              {/* IMAGE */}

              <img
                src={`/images/${photo.image}`}
                alt={photo.title}
                className="admin-gallery-image"
              />




              {/* CONTENT */}

              <div className="admin-gallery-content">

                <p className="album-name">

                  📁 {photo.album}

                </p>



                <h4>
                  {photo.title}
                </h4>





                <button
                  className="delete-gallery-btn"
                  onClick={() => deleteImage(photo.id)}
                >

                  Delete Photo

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminGallery;