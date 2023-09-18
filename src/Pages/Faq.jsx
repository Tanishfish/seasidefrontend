import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../Api";
import { useParams } from "react-router-dom";

const Faq = () => {
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
      FAQS
    </h2>
    <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
       Q - How do I Join your agency?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
        A – To join our agency, please complete the online form.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
     Q – what kind of pictures should I send?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
        A – To join our agency, please complete the online form.
      </p>
       <span style={{ fontSize: "18px",
          color: "#647589",  fontWeight: "400",
          lineHeight: "32px",}}>We will need:</span>
          <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
    Headshot
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
        Your headshot should have a plain background with no distractions such as dummy’s, hair accessories and hats. Just head and shoulders would be sufficient.
         This should be with a neutral expression
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
   Headshot 2
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
       Same as above but smiling.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
  Full Length
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
       The full length image again should have a plain background with no distractions. Plain T-shirt and jeans/leggings or plain baby grow/vest for babies. We will not accept images in costumes, with accessories with other people in them. Remember,
        this is your child's time to shine so you want to show off your child’s best attributes. 
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
 NB: We will automatically reject applications which don't follow the guidelines.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
        Q – How does this process work?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
       A - Once you have joined Seaside kids Casting, our bookers will send your child’s profile to clients whenever they match a casting brief. Once your child has been signed with seaside kids casting you will be given a log in for tagmin. This is where you will be alerted for any castings your child has been submitted for.  You can also update your child’s profile at any time.<br/>
        Castings are mostly between 4-6pm for school age children and earlier in the day for babies and pre-schoolers. Jobs will mostly be during the day so time out of school is necessary. This is why you will need to contact your local authority to licence your child. We will help you obtain the relevant licencing for each job. <br/>
        Castings can come in with very short notice, sometimes even the next day. Being available to attend will obviously increase your child’s chances of success with us.<br/>
         We would love to guarantee all of our children work, Our bookers get a great sense of achievement when our kids get booked and are filled with pride whenever they see them on TV or in magazines. However, it’s up to the casting directors, clients and photographers on who is seen and ultimately booked. 
       Taking note of all of the above will give your child a very high chance of securing work.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
  Q - What is Spotlight?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
       A - Spotlight features profiles for young performers from the UK's leading agencies and theatre schools. It is the UK's definitive platform of performers aged 4-25 and the best way for any young performer to promote themselves to casting opportunities. Casting directors generally prefer to hire children that are registered with spotlight.<br/>
Young performers can join any time after their 4th birthday.<br/>
Productions cast via Spotlight include feature films, west end musicals, tv dramas, commercials and so much more.
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
  Q - How can my child join?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
        }}>
      A - Once you are registered with the agency you will be sent an invitation to join link to set up an online spotlight profile. You can fill this information out yourself or we can help you to fill it out if you prefer.<br/>
Only children who are represented by an approved agent are eligible for Spotlight young performers membership. 
 
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#647589",
          fontWeight: "700",
          lineHeight: "32px",
        }}
      >
 Q -How much does Spotlight cost to join?
      </p>
      <p style={{
        marginTop:"-10px",
          fontSize: "18px",
          color: "#647589",
          fontWeight: "500",
          lineHeight: "32px",
          marginBottom:"150px"
        }}>
       A - An annual, 365 day membership currently costs £106 (inc. VAT). Please note that monthly direct debit is not currently available for new members,<br/> only for those renew-ing or reactivating existing memberships.
      </p>
      
    </div>
    </>
  )
}

export default Faq