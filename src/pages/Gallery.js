import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../styles/Gallery.css";

function Gallery() {

  const [gallery, setGallery] = useState([]);

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);




  // FETCH GALLERY

  const fetchGallery = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/gallery"
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




  // UNIQUE ALBUMS

  const albums = [...new Set(

    gallery.map((photo) => photo.album)

  )];




  // FILTER PHOTOS

  const filteredPhotos = gallery.filter(

    (photo) => photo.album === selectedAlbum
  );




  return (

    <div className="gallery-page">

      {/* HERO */}

      <div className="gallery-hero">

        <div className="container">

          <h1>
            School Gallery
          </h1>

          <p>
            Explore beautiful memories from our school events
          </p>

        </div>

      </div>






      <div className="container py-5">

        {/* ===== ALBUM SECTION ===== */}

        {!selectedAlbum && (

          <div className="album-grid">

            {albums.map((album, index) => {

              // FIRST IMAGE AS COVER

              const albumCover = gallery.find(

                (photo) => photo.album === album
              );



              return (

                <div
                  className="album-card"
                  key={index}
                  onClick={() => {

                    setSelectedAlbum(album);




                    Swal.fire({

                      position:"top-end",

                      icon:"success",

                      title:`${album} Album Opened`,

                      showConfirmButton:false,

                      timer:1200
                    });
                  }}
                >

                  {/* COVER IMAGE */}

                  <img
                    src={`/images/${albumCover.image}`}
                    alt={album}
                    className="album-cover"
                  />





                  {/* OVERLAY */}

                  <div className="album-overlay">

                    <h3>
                      {album}
                    </h3>

                  </div>

                </div>
              );
            })}

          </div>
        )}








        {/* ===== PHOTOS SECTION ===== */}

        {selectedAlbum && (

          <div>

            {/* BACK BUTTON */}

            <button
              className="back-btn"
              onClick={() => setSelectedAlbum(null)}
            >

              ← Back to Albums

            </button>





            {/* TITLE */}

            <h2 className="album-title">

              {selectedAlbum}

            </h2>





            {/* PHOTOS */}

            <div className="gallery-grid">

              {filteredPhotos.map((photo) => (

                <div
                  className="gallery-card"
                  key={photo.id}
                >

                  <img
                    src={`/images/${photo.image}`}
                    alt={photo.title}
                    className="gallery-image"
                    onClick={() => {

                      setSelectedImage(photo.image);




                      Swal.fire({

                        position:"top-end",

                        icon:"info",

                        title:"Image Opened",

                        showConfirmButton:false,

                        timer:1200
                      });
                    }}
                  />

                </div>

              ))}

            </div>

          </div>
        )}

      </div>








      {/* ===== FULL IMAGE MODAL ===== */}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE */}

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

export default Gallery;