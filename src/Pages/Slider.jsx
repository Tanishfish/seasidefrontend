import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API}getAllSlider`
      );
      setSliderData(response.data.data);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="carousel slide" id="carouselExample" data-bs-ride="carousel">
      <div className="carousel-inner">
        {sliderData.map((res, index) => (
          <div
            key={res?.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`http://seasidekidscasting.co.uk/uploads/${res.photo}`}
              className="d-block w-100" // Adjust the class or add custom styles here
              alt={res.title}
              style={{ maxWidth: "100%", height: "auto" }} // Added style to control image size
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
