import React, { useState, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendarFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { API } from "../Api";

const Joinus = () => {

 const photoInputRef = useRef(null);
const photo2InputRef = useRef(null);
const photo3InputRef = useRef(null);

  const initialFormData = {
    id: "",
    name: "",
    dob: null,
    parents_name: "",
    child_height: "",
    location: "",
    phone: "",
    email: "",
    school_details: "",
    special_talents: "",
    photo: "",
    photo2: "",
    photo3: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const datePickerRef = useRef(null);

  console.log(formData);

  const takeFormData = async (e) => {
    try {
      const formDataToSend = new FormData();  
    // Append the image files to the FormData object
    if (formData.photo) {
      formDataToSend.append("photo", formData.photo);
    }
    if (formData.photo2) {
      formDataToSend.append("photo2", formData.photo2);
    }
    if (formData.photo3) {
      formDataToSend.append("photo3", formData.photo3);
    }

    // Append other form fields to the FormData object
    formDataToSend.append("id", formData.id);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("parents_name", formData.parents_name);
    formDataToSend.append("child_height", formData.child_height);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("school_details", formData.school_details);
    formDataToSend.append("special_talents", formData.special_talents);
    formDataToSend.append("status", formData.status);

    console.log("Data to be sent to API:", formDataToSend);  
    // Send the FormData object in the POST request
    const response = await axios.post(`${API}formdata`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    
      // Set the response data in the state
      console.log(response);

      if (photoInputRef.current) {
        photoInputRef.current.value = "";
      }
      if (photo2InputRef.current) {
        photo2InputRef.current.value = "";
      }
      if (photo3InputRef.current) {
        photo3InputRef.current.value = "";
      }

      setFormData({ ...initialFormData, dob: null,
        photo: null,
        photo2: null,
        photo3: null, });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data to be Sent:", formData);   
    takeFormData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "photo" || name === "photo2" || name === "photo3") {
      if (e.target.files && e.target.files.length > 0) {
        console.log(`Selected ${name}:`, e.target.files[0]);
        // Handle file inputs when files are selected
        setFormData((prevData) => ({
          ...prevData,
          [name]: e.target.files[0], // Update with the selected file
        }));
      } else {
        console.log(`No file selected for ${name}`);
        // Handle file inputs when no files are selected (clear the value)
        setFormData((prevData) => ({
          ...prevData,
          [name]: null, // Set to null to clear the selection
        }));
      }
    } else {
      // Handle other input fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  

  const handleDateChange = (date) => {
    // Update the DOB field in the form data
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const handleIconClick = () => {
    // Focus on the DatePicker component when the icon is clicked
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleCloseCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false); // Close the calendar
    }
  };

  // useEffect(() => {
  //   takeFormData();
  // },);

  return (
    <div className="col-md-6 w-50 m-auto">
      <h2 style={{ fontSize: "47px", fontWeight: "bold", marginTop: "10px" }}>
        JOIN US
      </h2>
      <p
        style={{
          textAlign: "justify",
          fontSize: "18px",
          lineHeight: "32px",
          fontWeight: "500",
          color: "#647589",
          margin: "0 0 5px",
        }}
      >
        Before you complete the form, please refer to the FAQ page for
        photograph guidelines. We will automatically reject applications from
        any applicants who have not followed the instructions.
      </p>

      <div>
        <form
         action="/api/formdata"
          onSubmit={handleSubmit}
          method="POST"
          style={{
            margin: "30px 0",
            border: "#7dccff solid 10px",
            padding: "25px",
            borderRadius: "30px",
          }}
          encType="multipart/form-data"
        >
          <div>
            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Name*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Date of Birth*</label>
              <div className="col-sm-8">
                <div className="input-group">
                  <DatePicker
                    className="form-control"
                    type="date"
                    selected={formData.dob}
                    onChange={handleDateChange}
                    placeholderText="Select Date of Birth"
                    ref={datePickerRef}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      onClick={handleCloseCalendar}
                    >
                      <ImCross style={{ marginTop: "5px" }} />
                    </span>
                    <span
                      className="input-group-text"
                      onClick={handleIconClick}
                    >
                      <BsFillCalendarFill
                        style={{ marginTop: "5px", marginRight: "5px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Parents name*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Parents name"
                  name="parents_name"
                  value={formData.parents_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Height (cm)*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Height (cm)"
                  name="child_height"
                  value={formData.child_height}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Location*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Phone number*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Email address*</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">
                Do you attend a theatre school? If yes, please give details.
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School Details"
                  name="school_details"
                  value={formData.school_details}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <label className="col-sm-4">Any Special talents</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Any Special talents"
                  name="special_talents"
                  value={formData.special_talents}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <div className="col-sm-4">
                <label htmlFor="formFile">Photo*</label>
                <br />
                <span>(Max Upload Size: 10MB)</span>
              </div>
              <div className="col-sm-8">
                <input
               ref={photoInputRef}
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="photo"
                  // value={formData.photo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <div className="col-sm-4">
                <label htmlFor="formFile">Photo2</label>
                <br />
                <span>(Max Upload Size: 10MB)</span>
              </div>
              <div className="col-sm-8">
                <input
               ref={photo2InputRef}
                  className="form-control"
                  type="file"
                  id="formFile2"
                  name="photo2"
                  // value={formData.photo2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row w-75 m-auto">
              <div className="col-sm-4">
                <label htmlFor="formFile">Photo3</label>
                <br />
                <span>(Max Upload Size: 10MB)</span>
              </div>
              <div className="col-sm-8">
                <input
                ref={photo3InputRef}
                  className="form-control"
                  type="file"
                  id="formFile3"
                  name="photo3"
                  // value={formData.photo3}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <button
                  className="btn btn-dark btn-rectangular"
                  style={{
                    width: "150px",
                    height: "50px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    justifyContent: "center",
                  }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Joinus;
