import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='header_con'>

        {/* ........ Left side ....... */}
        <div className='context_con' >
            <p className='header_p'>Book Appointment <br /> With Trusted Doctors</p>
            <div className='container_2'>
                <img className=' doctors_icons' src={assets.doctors_icons} alt="" />
                <p className='header_p2'>Simply browser through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free. </p>
            </div>
            <a href="#speciality" className='href_p'>
                Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/*..........Right side ......*/}
        <div className='img_con'>
            <img className='header_img' src={assets.doc5} alt="" />

        </div>
    </div>
  )
}

export default Header