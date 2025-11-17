import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer_Con'>
        <div className='footer_Cont'>
            {/*.......Left.........*/}
            <div className='footer_notes_c'>
                <img src={assets.logo1} alt="" />
                <p className='footer_notes'>This hospital of Southern Africa operates a range of multi-disciplinary acute care private hospitals in South Africa and Namibia and focuses on providing value to our patients through safe, quality care in a patient friendly environment.</p>

            </div>
             {/*.......center.........*/}
            <div className='footer_las'>
                <p className='footer_pn'>COMPANY INFO</p>
                <ul className='footer_ul'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            {/*.......right.........*/}
            <div className='footer_las'>
                <p className='footer_pn'>Contact us</p>
                <ul className='footer_ul'>
                    <li>+27 085 890 0349</li>
                    <li>hospitalmed@gmail.com</li>
                    <li>wwww.hospitalmed.com</li>
                    <li>hospitalmed.services@gmail.co</li>
                    
                </ul>
            </div>
        </div>
         {/* .............Bottom ......*/}
        <div className='footer_copy'>
            <hr />
            <p>Copyright 2025@ HospitalMed - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer