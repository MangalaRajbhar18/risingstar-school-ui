import { useEffect, useState } from "react";
import "./AdminAdmissions.css";

function AdminAdmissions() {

  const [admissions, setAdmissions] = useState([]);




  // FETCH ADMISSION DATA

  useEffect(() => {

    fetch("http://localhost:8080/api/admission")

      .then((response) => response.json())

      .then((data) => {

        setAdmissions(data);
      })

      .catch((error) => {

        console.log(error);
      });

  }, []);





  // DELETE ADMISSION

  const deleteAdmission = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this admission?"
    );

    if(confirmDelete){

      try{

        const response = await fetch(

          `http://localhost:8080/api/admission/${id}`,

          {
            method:"DELETE"
          }
        );

        if(response.ok){

          setAdmissions(

            admissions.filter((item) => item.id !== id)
          );

        }else{

          alert("Delete Failed");
        }

      }catch(error){

        console.log(error);
      }
    }
  };





  return (

    <div className="admin-admission-page">

      {/* HEADER */}

      <div className="admin-admission-header">

        <h1>
          Admission Applications
        </h1>

        <p>
          Manage all student admission applications here.
        </p>

      </div>





      {/* TABLE */}

      <div className="table-container">

        <table className="admission-table">




          {/* TABLE HEAD */}

          <thead>

            <tr>

              <th>ID</th>

              <th>Student Name</th>

              <th>Class</th>

              <th>Date of Birth</th>

              <th>Gender</th>

              <th>Previous School</th>

              <th>Father Name</th>

              <th>Mother Name</th>

              <th>Mobile No.</th>

              <th>Father Occupation</th>

              <th>Mother Occupation</th>

              <th>Address</th>

              <th>Action</th>

            </tr>

          </thead>





          {/* TABLE BODY */}

          <tbody>

            {
              admissions.length > 0 ? (

                admissions.map((admission) => (

                  <tr key={admission.id}>

                    <td>{admission.id}</td>

                    <td>{admission.studentName}</td>

                    <td>{admission.classApplyingFor}</td>

                    <td>{admission.dateOfBirth}</td>

                    <td>{admission.gender}</td>

                    <td>{admission.previousSchool}</td>

                    <td>{admission.fatherName}</td>

                    <td>{admission.motherName}</td>

                    <td>{admission.mobileNo}</td>

                    <td>{admission.fatherOccupation}</td>

                    <td>{admission.motherOccupation}</td>

                    <td>{admission.address}</td>

                    <td>
                  <select
                   className={
                   admission.status === "Confirmed"
                   ? "action-dropdown confirmed"
                   : "action-dropdown"
                  }
                   value={admission.status || ""}
                   onChange={(e) => {
                   const action = e.target.value;

                   if (action === "Confirmed") {
                   setAdmissions(
                   admissions.map((item) =>
                   item.id === admission.id
                   ? { ...item, status: "Confirmed" }
                   : item
                  )
                );
                  }

                  if (action === "Delete") {
                 deleteAdmission(admission.id);
                  }
              }}
                >
                  <option value=""> Select Action </option>

                  <option value="Confirmed"> Confirm Admission </option>

                  <option value="Delete"> Delete Admission </option>
              </select>
                </td>

                  </tr>
                ))
              ) : (

                <tr>

                  <td colSpan="13" className="no-data">

                    No Admission Applications Found

                  </td>

                </tr>
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminAdmissions;