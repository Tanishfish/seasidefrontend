import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       <div className='bg-black d-block p-3'>
       <div className='d-flex  justify-content-between flex-wrap ml-5 container 'style={{ fontWeight: 'bold', fontSize:'18px' }}>
         <Link to="/" className='text-white text-decoration-none'>HOME</Link>
        <Link to="/aboutus/2" className='text-white text-decoration-none'>ABOUT US</Link>
        <Link to="ourservices/3" className='text-white text-decoration-none'>OUR SERVICES</Link>
        <Link to="youngadultdivision/9" className='text-white text-decoration-none'>YOUNG ADULT DIVISION</Link>
        <Link to="familydivision/10" className='text-white text-decoration-none'>FAMILY DIVISION</Link>
        <Link to="parentlogin/5" className='text-white text-decoration-none'>PARENT LOGIN</Link>
        <Link to="faq/6" className='text-white text-decoration-none'>FAQ'S</Link>
        <Link to="contactus/4" className='text-white text-decoration-none'>CONTACT US</Link>
       </div>
       </div>
    </div>
  )
}

export default Navbar;