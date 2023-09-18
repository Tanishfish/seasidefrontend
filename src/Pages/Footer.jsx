import React from 'react'
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {HiMail} from "react-icons/hi"
import {AiFillPhone} from "react-icons/ai"
import {Link} from "react-router-dom"

const Footer = () => {
    const iconStyle = {
    fontSize: "32px",
    color:"black",
  };

  return (
    <>
     <div className="container">
          <div className="row align-items-center " >
            <div className="col-md-12 text-center " >
              <img src="http://seasidekidscasting.co.uk/uploads/footer_logo_1.png" className="mt-4 mb-3 justify-content-between" width="112" height="121" alt="" />
              <ul className="social-icon "style={{display:'flex', justifyContent:"center", alignItems:"center", gap:"30px", marginRight:"15px"}}>
                
                  <Link to="https://www.facebook.com/Seaside-Kids-Casting-106945574676807" target="_blank">
                    <BiLogoFacebook style={iconStyle}/>
                  </Link>
                
                  <Link to="https://www.instagram.com/seaside_kids_casting/" target="_blank">
                    <AiOutlineInstagram style={iconStyle}/>
                  </Link>
              
                
                  <Link to="#" target="_blank">
                    <AiFillYoutube style={iconStyle}/>
                  </Link>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
          <div className="col-md-12">
            <ul className="social-icon" style={{display:'flex', justifyContent:"center", alignItems:"center", gap:"30px",}}>
              <Link to="info@seasidekids.co.uk" style={{textDecoration:"none",fontSize:"20px",color:"black"}}>
                <i style={{marginRight:"20px"}}>
                  <HiMail style={iconStyle}/>
                </i>info@seasidekids.co.uk
              </Link>
              <Link to="tel:07896904920" style={{textDecoration:"none",fontSize:"20px",color:"black"}}>
                <i style={{marginRight:"20px"}}>
                  <AiFillPhone style={iconStyle}/>
                </i>07896904920
              </Link>
            </ul>
            </div>
          </div>
        </div>

        <div className="copyright" >
          <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p>
      			Copyright © 2021 Seaside Kids Casting -	All Right Reserved | 	
            <Link to="http://seasidekidscasting.co.uk/privacy_policy" style={{textDecoration:"none",color:"black"}}> Privacy Policy</Link> </p>
          </div>
        </div>
    </>
  )
}

export default Footer