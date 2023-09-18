import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai"
import { API } from "../Api";

const Home = () => {
  const [blogData, setblogData] = useState([]);
  const owlCarouselRef = useRef(null);
  // const flexContainerStyle = {
  //   display: "flex",
  //   flexWrap: "nowrap", // Images will be in a single row
  //   overflowX: "auto", // Enable horizontal scrolling
  // };

  const fetchblogData = async () => {
    try {
      const response = await axios.get(`${API}getAllBlog`);
      setblogData(response.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchblogData();
  }, []);

  

  const owlCarouselOptions = {
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1, 
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <>
      <Slider />
      <div>
        <div className="mx-5">
          <h2 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>
            {" "}
            OUR ETHOS{" "}
          </h2>
          <div className="">
            <img
              src="http://seasidekidscasting.co.uk/include/images/welcome.png"
              alt="wer"
              style={{
                float: "right",
                height: "500px",
                marginRight: "50px",
                width: "574px",
                marginBottom: "80px",
              }}
            />
          </div>
          <p className="" style={{ fontSize: "18px", color: "#647589" }}>
            We are a family based agency who believe that each child is unique.
            Our ethos is to nurture and guide our children to be the best that
            they can be, highlighting their skills and encouraging them to
            flourish. We treat everyone as equals, therefore are on first name
            terms with parents, children and clients ultimately becoming part of
            our Seaside Kids family. Our pragmatic approach has earned the
            loyalty of our children and parents who are always valued. Apply
            today, to see if you have what it takes to be part of our family...
            <br />
            &nbsp;
          </p>
          <p
            className="text-puchan"
            style={{
              color: "#7DCCFF",
              fontSize: "28px",
              lineHeight: "38px",
              fontWeight: "500",
            }}
          >
            “Remember you're the one who can fill
            <br />
            &nbsp;the world with sunshine"
            <span style={{ color: "black" }}>- Snow White</span>
          </p>

          <p className="btn-row">
            <Link
              to=""
              className="btn btn-dark btn-rectangular"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                width: "150px",
                height: "50px",
              }}
            >
              Read More
            </Link>
          </p>
        </div>
      </div>

      <div className="join-wrap">
        <img
          src="http://seasidekidscasting.co.uk/include/images/join-bg.jpg"
          width="100%"
          alt="yt"
        />
        <div className="container mt-5 text-center">
          <div className="box">
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "Oswald",
                fontSize: "35px",
              }}
            >
              JOIN SEASIDE KIDS CASTING
              <Link
                to="http://seasidekidscasting.co.uk/join_us"
                className="text-decoration-none"
              >
                {"  "}
                CLICK HERE
              </Link>
              {"  "} TO JOIN
            </h2>
            <p className="btn-row mt-5 ">
              <Link
                to="http://seasidekidscasting.co.uk/join_us"
                className="btn btn-dark btn-rectangular"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  width: "150px",
                  height: "50px",
                }}
              >
                Join Us
              </Link>
            </p>
            <button className="owl-prev" style={{position:"absolute", right:"0px", bottom:'50px'}}></button>
          </div>
        </div>
      </div>
      <section
        className="blog-wrap"
        style={{
          backgroundImage:
            "url('http://seasidekidscasting.co.uk/include/images/blog-bg.jpg')",
          backgroundSize: "cover",
          padding: "99px 0 109px",
          marginBottom: "50px",
          position: "relative",
        }}
      >
        <div className="container" style={{ boxSizing: "border-box" }}>
          <h2
            className="text-center"
            style={{ fontWeight: "bold", color: "white", marginBottom: "43px" }}
          >
            BLOG
          </h2>
          <OwlCarousel ref={owlCarouselRef} className="owl-theme" {...owlCarouselOptions}>
  {blogData.map((res) => (
    <div key={res.id} className="item">
      <div
        className="photo"
        style={{
          borderLeft: "solid 15px #fff",
          borderBottom: "solid 15px #fff",
          position: "relative", // Add this to establish a positioning context
        }}
      >
        <img
          src={`http://seasidekidscasting.co.uk/uploads/${res.photo}`}
          alt={res.title}
          className="lazyFade"
        />

        <div
          className="image-text"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "18px",
          }}
        >
          {/* White Circle Button */}
          <div
            style={{
              position: "absolute",
              right: "-279px", // Adjust this as needed
              width: "53px",
              height: "53px",
              background: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AiOutlineArrowRight
              style={{
                fontSize: "30px",
                color: "black",
              }}
              onClick={() => owlCarouselRef.current.next()}
            />
          </div>

          {/* Blue Button */}
          <button
            style={{
              backgroundColor: "#7DCCFF",
              cursor: "pointer",
              borderRadius: "5px",
              width: "30px",
              display: "inline-block",
              position: "absolute",
              right: "-280px", // Adjust this to match the white circle button
              bottom: "150px", // Adjust this as needed
            }}
            onClick={() => owlCarouselRef.current.next()}
          >
            <AiOutlineArrowRight style={{ fontSize: "20px", color: "black" }} />
          </button>

          <span>
            <AiOutlineUser /> User
          </span>

          <span style={{ marginLeft: "40px" }}>
            <FaRegCommentDots /> Comments
          </span>
          <h3 style={{ fontSize: "20px" }}>Coming Soon</h3>
        </div>
      </div>
    </div>
  ))}
</OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Home;
