import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";
import { useParams } from "react-router-dom";

const OurServices = () => {
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


    {/* <div className="mx-5">
      <h2 className="mt-3 mb-4" style={{ fontWeight: "bold", fontSize:"45px" }}>
        SERVICES
      </h2>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
        <em style={{fontStyle:"italic"}}><strong>Bookings and what we cover.</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        At Seaside Kids Casting we submit children for a varety of work
        including commercials, tv, film, stage, supporting artist work and
        photograpic work.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We are very proud to have worked with lots of wonderful brands and
        Productions.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        Our Clients have worked on campaigns and productions for Disney, Lidl,
        HBO, Sony Music, Sky, BBC, Bloch to name a few.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
       <em style={{fontStyle:"italic"}}> <strong>Castings and self tape submissions.</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        Currently in todays climate many initial castings are done via self tape
        or zoom. Auditions can be anywhere in the UK but a large number of jobs
        and castings are in London. We are a south based agency and will accept
        children within a 2 hour radius of London.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
      <em style={{fontStyle:"italic"}}> <strong>Workshop and events.</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        At Seaside Kids Casting we like to offer children guidance and support
        to ensure they perform to the best of their ability.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We hold regular workshops which help the children to learn new skills
        and techniques and helps to build confidence.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We frequently hold workshops and events with industry professionals,
        these include west end workshops, singing lessons and drama workshops.
        Information about all our workshops and events will be emailed to our
        clients and advertised on our social media pages
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
      <em style={{fontStyle:"italic"}}> <strong>Licenced Chaperones.</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We can supply licenced chaperones to accompany our children on set
        making our service a one stop shop to all your casting needs. Please
        email us if you require licenced chaperones for your production.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
      <em style={{fontStyle:"italic"}}> <strong>On Set Tutors.</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We work with a range of qualified teachers and tutors that can accompy
        children on set for tuition. We also offer individual or group tuition
        via zoom.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
        <strong>Audition Preparation.</strong>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        We offer both online and in person monthly audition preparation classes
        to help prepare your children for auditions and self-tapes. These
        classes include finding suitable monologues for your child, working on
        contrasting songs and dance workshops to help children learn how to pick
        up choreography in an audition situation. These classes also help the
        children build confidence and takes the pressure of the audition
        process.
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
      <em style={{fontStyle:"italic"}}>  <strong>Headshots and Photographs.</strong></em>
      </p>
      <ul style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        <li>
          Your photographs are the first thing the client sees so it’s
          imperative that the photos show your child of to their full potential.
        </li>
        <li>
          We offer monthly photoshoots that you can attend to keep your
          portfolio updated.
        </li>
        <li>
          We ask that babies photos are updated every month, but these do not
          need to be professional.
        </li>
        <li>
          We ask that children have their photos updated every 6 months unless
          they have any major changes in appearance.
        </li>
      </ul>

      <p style={{fontSize: "18px",color: "#647589",fontWeight:"500",lineHeight:"32px"}}>
      <em style={{fontStyle:"italic"}}><strong>Sole Agency</strong></em>
      </p>
      <p style={{fontSize: "18px",color: "#647589",fontWeight:"450",lineHeight:"32px"}}>
        Seaside Kids Casting is a sole agency and therefore your child can only
        be represented with ourselves
      </p>
    </div> */}
    </>
  );
};

export default OurServices;
