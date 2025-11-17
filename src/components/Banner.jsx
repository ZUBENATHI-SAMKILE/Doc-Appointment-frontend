import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='Banner_con'>
        {/*..........Left side......*/}
        <div className='Banner_wor'>
            <div className='Banner_notes'>
                <p>Book Appointment</p>
                <p className='Banner_p'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='Banner_butt'>Create account</button>
        </div>

        {/*........ Right side .....*/}
        <div className='Banner_img_con'>
            <img className='Banner_img' src={assets.appointment_img} alt="" />

        </div>


    </div>
  )
}

export default Banner