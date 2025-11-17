import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='Contact_page'>

      <div className='About_heading'>
        <p>CONTACT US</p>

        <div className='Contact_content'>
          <img className='Contact_pic'  src={assets.contact_image} alt="" />

          <div className='Contact_paragraphs'>
            <p className='About_heading'>Our Office</p>
            <p>47 Mallinson Rd, Sydenham,<b /> Durban, 4091</p>
            <p> Tel: +27 63 821 8674 <br /> Email: hospitalmed@gmail.com</p>
            <p>Careers at HospitaMed </p>
            <p> Learn more about our teams and job opening. </p>
            <button className='Contact_button'> Explore jobs </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact