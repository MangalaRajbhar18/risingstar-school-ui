import { useEffect, useState } from "react";
import "./NoticeBoard.css";

function NoticeBoard() {

  const [notices, setNotices] = useState([]);

  const [pamphlets, setPamphlets] = useState([]);

  const [noticeIndex, setNoticeIndex] = useState(0);

  const [pamphletIndex, setPamphletIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);





  // FETCH NOTICES

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





  // FETCH PAMPHLETS

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

    fetchNotices();

    fetchPamphlets();

  }, []);





  // AUTO SLIDER

  useEffect(() => {

    const interval = setInterval(() => {

      if(notices.length > 0){

        setNoticeIndex((prev) =>

          prev === notices.length - 1
          ? 0
          : prev + 1
        );
      }





      if(pamphlets.length > 0){

        setPamphletIndex((prev) =>

          prev === pamphlets.length - 1
          ? 0
          : prev + 1
        );
      }

    },3000);





    return () => clearInterval(interval);

  }, [notices,pamphlets]);





  return (

    <div className="noticeboard-section">

      <div className="noticeboard-container">




        {/* LEFT SIDE */}

        <div className="notice-side">

          <div className="notice-header">

            <span className="notice-tag">
              SCHOOL NOTICE BOARD
            </span>

            <span className="live-badge">
              LIVE
            </span>

          </div>





          {notices.length > 0 && (

            <div className="notice-card">

              {notices[noticeIndex].noticeImage && (

                <img
                  src={`/images/${notices[noticeIndex].noticeImage}`}
                  alt={notices[noticeIndex].title}
                  className="notice-small-image"
                />
              )}







              <div className="notice-content">

                <h2>
                  {notices[noticeIndex].title}
                </h2>





                <p>
                  {notices[noticeIndex].description}
                </p>





                <span className="notice-date">

                  📅 {notices[noticeIndex].date}

                </span>

              </div>

            </div>
          )}

        </div>









        {/* RIGHT SIDE */}

        <div className="pamphlet-side">

          <div className="pamphlet-top">

          </div>





          {pamphlets.length > 0 && (

            <div className="pamphlet-card-home">

              <img
                src={`/images/${pamphlets[pamphletIndex].image}`}
                alt="Pamphlet"
                className="pamphlet-image"
                onClick={() =>
                  setSelectedImage(
                    pamphlets[pamphletIndex].image
                  )
                }
              />

            </div>

          )}

        </div>

      </div>








      {/* FULL IMAGE POPUP */}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <span className="close-modal">
            ✕
          </span>





          <img
            src={`/images/${selectedImage}`}
            alt="Full"
            className="full-image"
          />

        </div>
      )}

    </div>
  );
}

export default NoticeBoard;