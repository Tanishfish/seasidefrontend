import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";
import { useParams } from "react-router-dom";

const FamilyDivision = () => {
  const { id } = useParams();
  const [contentData, setcontentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchSpecificContent = async () => {
      try {
          const response = await axios.get(`${API}getSpecificContent/${id}`);
          console.log("API Response:", response);
          const responseData = response.data.data;
          const idFromBackend = responseData.id; // Access the id from the response
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
        style={{ fontWeight: "bold", fontSize: "35px" }}
      >
        TWINS, MULTIPLES AND FAMILY DIVISION.
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}
      >
        Seaside Kids castings specializes in casting twins, triplets, siblings
        and Families for Photographic, television and Film work.
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
        We have a diverse range of all looks, ethnicities and family dynamics
        meaning Seaside kids casting can provide the best and most suited
        children for the jobs. We have twins and sibling groups of all ages on
        our books and our children and families come from all over the UK.
      </p>

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-2.jpg"
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

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-1.jpg"
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

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-4.jpg"
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

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-3.jpg"
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

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-7.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            marginLeft: "10px",
            width: "383px",
            // marginBottom: "80px",
            borderRadius: "20px",
            marginTop: "0px",
            marginRight: "20px",
          }}
        />
      </div>

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-6.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            marginLeft: "50px",
            width: "383px",
            marginBottom: "80px",
            borderRadius: "20px",
          }}
        />
      </div>

      <div style={{}}>
        <img
          src="http://seasidekidscasting.co.uk/include/images/family-devision-5.jpg"
          alt="wer"
          style={{
            float: "right",
            height: "500px",
            // marginLeft: "50px",
            width: "383px",
            marginBottom: "80px",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
    </>
  );
};

export default FamilyDivision;
