import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

    const navigate = useNavigate()
    const { speciality } = useParams()
    const [filterDoc, setFilterDoc] = useState([])
    const { doctors} = useContext(AppContext)


    const applyFilter = () => {
        if(speciality){
            setFilterDoc(doctors.filter(doc => doc.speciality == speciality ))
        } else{
            setFilterDoc(doctors)
        }
    }

    useEffect(()=>{
        applyFilter()

    },[doctors,speciality])


  return (
    <div className='Doctors_home'>
        <p className='Doctors_p'>Browse through the doctors specialist.</p>
        <div className='Doctors_con'>
            <div className='Doctors_Dash'>
                <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className='Doctors_Dash_p'>General physician</p>
                <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className='Doctors_Dash_p'>Gynecologist</p>
                <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className='Doctors_Dash_p'>Dermatologist</p>
                <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className='Doctors_Dash_p'>Pediatricians</p>
                <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className='Doctors_Dash_p'>Neurologist</p>
                <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className='Doctors_Dash_p'>Gastroenterologist</p>
            </div>
            <div className='doctors_pro'>
                {filterDoc.map((item,index)=> (
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='doctors_pro2' key={index}>
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
        </div>
    </div>
  )
}

export default Doctors