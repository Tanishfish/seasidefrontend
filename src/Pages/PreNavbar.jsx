import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Link } from "react-router-dom";
import "../App.css";


const PreNavbar = () => {
  const iconStyle = {
    fontSize: "48px",
  };

  return (
    <div className="d-flex justify-content-between ">
      <div className="mx-5 mt-5" >
      <BsFacebook style={iconStyle} />
      <FaInstagramSquare style={iconStyle} className="mx-3"/>
      <FaYoutubeSquare style={iconStyle} />
      <ImMail4 style={iconStyle}  className="mx-3"/>
      </div>

      <div className="mt-4 mb-3">
        <img src="http://seasidekidscasting.co.uk/uploads/logo_1.png" alt="seaside"/>
      </div>

      <div className="mt-5 mx-5">
        <Link to="/join-us">
          <button className="btn btn-dark btn-rectangular" style={{ width: "150px", height: "50px",fontWeight:'bold',fontSize:'18px' }}>JOIN US</button>
        </Link>
      </div>

    </div>
  );
};

export default PreNavbar;
