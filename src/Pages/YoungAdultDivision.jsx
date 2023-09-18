import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";
import { useParams } from "react-router-dom";


const YoungAdultDivision = () => {
  const { id } = useParams();
  const [contentData, setcontentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchSpecificContent = async () => {
      try {
          const response = await axios.get(`${API}getSpecificContent/${id}`);
          console.log("API Response:", response);
          const responseData = response.data.data;
          const idFromBackend = responseData.id; 
          console.log("ID from Backend:", idFromBackend);
          const data = responseData.data;
          console.log("Data from API:", data);
          setcontentData(data);
          setIsLoading(false);
      } catch (error) {
          console.error("Error fetching content data:", error);
          setIsLoading(false);
      }
  };  
    
    fetchSpecificContent();
  }, [id]);


  return (
    <>
     <div className="mx-5">
    <div style={{ fontSize: "18px", color: "#647589", fontWeight: "500", lineHeight: "32px", marginBottom: "110px" }}>
      {isLoading ? (
        <p>Loading content...</p>
      ) : contentData && Array.isArray(contentData) && contentData.length > 0 ? (
        contentData.map((content) => (
          <div key={content.id}>
            <h3 className="mt-3 mb-4" style={{ fontWeight: 'bold', color: "black" }}> {content.title}</h3>
           <div className="content-container">
<div dangerouslySetInnerHTML={{ __html: content.description }} />
</div>
          </div>
        ))
      ) : (
        <p>No content available.</p>
      )}
    </div>
  </div>

    <div className="mx-5">
      <h2
        className="mt-3 mb-4"
        style={{ fontWeight: "bold", fontSize: "40px" }}
      >
        YOUNG ADULT DIVISION
      </h2>
      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/yofi-yvorra.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            marginLeft: "50px",
            width: "574px",
            marginBottom: "80px",
            borderRadius: "20px",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
          marginBottom: "110px",
        }}
      >
        <p>
          Welcome to Seaside Castings – Young Adult Division, the home of our
          18-24 year old talented actors. We represent some of the countries
          most talented young adults, casting them for TV, Theatre, film &
          commercial work. We have a great relationship with our young adults
          and take the time to get to know them to seek out where their talents
          lie; whether it’s singing West End Musicals as their greatest strength
          or reciting monologues from the latest serial dramas. From football
          skills, to skateboarding, breakdancing to puppetry, we represent a
          wide variety of clients from multicultural backgrounds. We are a
          diverse agency who are proud to represent talent from different
          backgrounds, physical ability and cultures. All of our talent are
          registered on Spotlight, the UK’s biggest casting platform and is a
          requirement upon joining our team. We firmly believe, if you want to
          be the best, you have to join the best! If you would like to join our
          agency in the Young Adult division, and think you have what it takes,
          email us today at info@seasidekids.co.uk to find out how!
        </p>	
        <div style={{}}>
        <img
          src="	http://seasidekidscasting.co.uk/include/images/Jessica-Smith.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            marginRight: "50px",
            width: "574px",
            marginBottom: "80px",
            borderRadius: "20px",
            marginTop:"20px"
          }}
        />
      </div>
      
        <div>
          <img
          src="	http://seasidekidscasting.co.uk/include/images/Charlotte-R.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            marginLeft: "50px",
            width: "574px",
            // marginBottom: "80px",
            borderRadius: "20px",
            marginTop:"-580px"
          }}
        />
        </div>
      </div>
    </div>
    </>
  );
};

export default YoungAdultDivision;
