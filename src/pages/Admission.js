// Admission.js

import { useState } from "react";
import "./Admission.css";

function Admission() {

  const [admission, setAdmission] = useState({

    studentName:"",
    classApplyingFor:"",
    dateOfBirth:"",
    gender:"",
    previousSchool:"",

    fatherName:"",
    motherName:"",
    mobileNo:"",
    fatherOccupation:"",
    motherOccupation:"",

    address:""
  });



  const handleChange = (e) => {

    setAdmission({

      ...admission,

      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/admission",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify(admission)
        }
      );

      if(response.ok){

        alert("Admission Form Submitted Successfully");

      } else {

        alert("Something went wrong");
      }

    } catch(error){

      console.log(error);
    }
  };



  return (

    <div className="admission-page">

      <div className="container py-5">

        {/* HERO SECTION */}

        <div className="admission-hero">

          <p className="hero-tag">
            ADMISSIONS
          </p>

          <h1>
            Join Rising Stars Public School
          </h1>

          <p className="hero-text">
            Admissions for 2026-2027 are open from June 2026 for Nursery to Class 10th.
            Complete the process early to secure your preferred seat.
          </p>



          <div className="hero-boxes">

            <div className="hero-box">

              <span>SESSION</span>

              <h3>2026-2027</h3>

            </div>



            <div className="hero-box">

              <span>CLASSES</span>

              <h3>Nursery - Class 10th</h3>

            </div>



            <div className="hero-box">

              <span>START DATE</span>

              <h3>June 2026</h3>

            </div>

          </div>

        </div>



        {/* MAIN SECTION */}

        <div className="row mt-5">

          {/* LEFT SIDE */}

          <div className="col-lg-7 mb-4">

            <div className="admission-card">

              <h2>
                Admission Form
              </h2>

              <p>
                Please fill in the details carefully.
              </p>



              <form onSubmit={handleSubmit}>

                <h5 className="section-title">
                  STUDENT DETAILS
                </h5>



                <div className="mb-3">

                  <label>Student Name *</label>

                  <input
                    type="text"
                    className="form-control"
                    name="studentName"
                    value={admission.studentName}
                    onChange={handleChange}
                    placeholder="Enter student full name"
                    required
                  />

                </div>



                <div className="row">

                  <div className="col-md-4 mb-3">

                    <label>Class Applying For *</label>

                    <select
                      className="form-control"
                      name="classApplyingFor"
                      value={admission.classApplyingFor}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select Class
                      </option>

                      <option>Nursery</option>
                      <option>Junior KG</option>
                      <option>Senior KG</option>
                      <option>Class 1</option>
                      <option>Class 2</option>
                      <option>Class 3</option>
                      <option>Class 4</option>
                      <option>Class 5</option>
                      <option>Class 6</option>
                      <option>Class 7</option>
                      <option>Class 8</option>
                      <option>Class 9</option>
                      <option>Class 10</option>

                    </select>

                  </div>



                  <div className="col-md-4 mb-3">

                    <label>Date of Birth *</label>

                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={admission.dateOfBirth}
                      onChange={handleChange}
                      required
                    />

                  </div>



                  <div className="col-md-4 mb-3">

                    <label>Gender *</label>

                    <select
                      className="form-control"
                      name="gender"
                      value={admission.gender}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select
                      </option>

                      <option>Male</option>
                      <option>Female</option>

                    </select>

                  </div>

                </div>



                <div className="mb-3">

                  <label>Previous School</label>

                  <input
                    type="text"
                    className="form-control"
                    name="previousSchool"
                    value={admission.previousSchool}
                    onChange={handleChange}
                    placeholder="Enter previous school name"
                  />

                </div>



                <h5 className="section-title mt-4">
                  PARENT DETAILS
                </h5>



                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>Father's Name *</label>

                    <input
                      type="text"
                      className="form-control"
                      name="fatherName"
                      value={admission.fatherName}
                      onChange={handleChange}
                      required
                    />

                  </div>



                  <div className="col-md-6 mb-3">

                    <label>Mother's Name *</label>

                    <input
                      type="text"
                      className="form-control"
                      name="motherName"
                      value={admission.motherName}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>



                <div className="row">

                  <div className="col-md-4 mb-3">

                    <label>Mobile No. *</label>

                    <input
                      type="number"
                      className="form-control"
                      name="mobileNo"
                      value={admission.mobileNo}
                      onChange={handleChange}
                      required
                    />

                  </div>



                  <div className="col-md-4 mb-3">

                    <label>Father Occupation</label>

                    <input
                      type="text"
                      className="form-control"
                      name="fatherOccupation"
                      value={admission.fatherOccupation}
                      onChange={handleChange}
                    />

                  </div>



                  <div className="col-md-4 mb-3">

                    <label>Mother Occupation</label>

                    <input
                      type="text"
                      className="form-control"
                      name="motherOccupation"
                      value={admission.motherOccupation}
                      onChange={handleChange}
                    />

                  </div>

                </div>



                <h5 className="section-title mt-4">
                  ADDRESS
                </h5>



                <div className="mb-4">

                  <label>Address*</label>

                  <textarea
                    rows="4"
                    className="form-control"
                    name="address"
                    value={admission.address}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>



                <button className="submit-btn">
                  Submit Application
                </button>

              </form>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div className="col-lg-5">

            {/* REQUIRED DOCUMENTS */}

            <div className="info-card mb-4">

              <h1>
                Required Documents
              </h1>

              <p>
                <h3>
                Keep these documents ready while applying for admission.
                </h3>
              </p>



              <div className="document-box">
                Birth Certificate of the Student
              </div>

              <div className="document-box">
                 Parents (Father and Mother) and Child AADHAAR CARD
              </div>

              <div className="document-box">
                 2 PHOTOS of Parents (Father and Mother) and Child 
              </div>



              <div className="document-box">

                <strong>
                  Residence Proof (any one)
                </strong>

                <div className="document-grid">

                  <span>Electricity Bill </span>
                  

                </div>

              </div>

            </div>



            {/* PROCESS */}

            <div className="info-card">

              <h1>
                Admission Process
              </h1>

              <p>
                <h3>Follow these simple steps.</h3>
              </p>



              <div className="process-box">
                1. Fill in all the required details in the admission form.
              </div>

              <div className="process-box">
                2.After filling out the form, submit it.
              </div>

              <div className="process-box">
                3.Read the required documents carefully and submit hard copies of all documents to the school as early as possible.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admission;