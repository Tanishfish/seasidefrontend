import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";
import { useParams } from "react-router-dom";

const Aboutus = () => {
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
  },[id]);

  return (
    <div className="mx-5">
      <div
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
          marginBottom: "110px",
        }}
      >
              {isLoading ? (
        <p>Loading content...</p>
      ) : contentData && Array.isArray(contentData) && contentData.length > 0 ? (
          contentData.map((content) => (                                  
            <div key={content.id}>
              <h3 className="mt-3 mb-4" style={{ fontWeight: "bold", color: "black" }}>
                {content.title}
              </h3>
              <div className="content-container">
                <div dangerouslySetInnerHTML={{ __html: content.description }} />
                <style>
                  {`
                    .content-container img:first-child {
                      float: right;
                      height: 500px;
                      marginRight: 50px;
                      width: 574px;
                      marginBottom: 80px;
                      
                    }
                  `}
                </style>
              </div>
            </div>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </div>
  );
};

export default Aboutus;
