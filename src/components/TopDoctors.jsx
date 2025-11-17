import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='doctors_con'>
        <h1 className='doctors_h'>Top Doctors to Book</h1>
        <p className='doctors_p'>Simply browser through our extensive list of trusted doctors.</p>
        <div className='doctors_pro'>
            {doctors.slice(0,10).map((item,index)=> (
                <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='doctors_pro2' key={index}>
                    <img className='doctors_pictures' src={item.image} alt="" />
                    <div className='con'>
                        <div className='doctors_details'>
                            <p className='active_dot'></p><p>Available</p>
                        </div>
                        <p className='doctors_p3'>{item.name}</p>
                        <p className='doctors_p2'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='doctors_button'> more</button>
    </div>
  )
}

export default TopDoctors