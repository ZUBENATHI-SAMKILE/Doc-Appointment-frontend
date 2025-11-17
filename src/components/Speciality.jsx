import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality'>
        <h1 >Find by Speciality </h1>
        <p>Simply browser through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free. </p>
         <div className='speciality_not'>
             {specialityData.map((item,index)=>(
                <Link onClick={()=> scrollTo(0,0) } className='speciality_img' key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
             ))}
         </div>
    </div>
  )
}

export default Speciality