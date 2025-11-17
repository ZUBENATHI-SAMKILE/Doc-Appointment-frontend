import React, { useState } from 'react'
import { assets }  from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu ] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo1} alt="" />
        <ul className='ul_nav'>
            <NavLink to={'/'} className='nav_li'>
                <li >Home</li>
            </NavLink>
            <NavLink to={'/doctors'} className='nav_li'>
                <li >DOCTORS</li>
            </NavLink>
            <NavLink to={'/about'} className='nav_li'>
                <li >ABOUT</li>
            </NavLink>
            <NavLink to={'/contact'} className='nav_li'>
                <li>CONTACT</li>
            </NavLink>
        </ul>
        <div className='button_con'>
            {
                token ? <div className='profile_container'>
                        <img className='profile_img' src={assets.profile} alt=""  />
                        <img className='drop_down' src={assets.drop_down} alt="" />
                        <div className='drop_container'>
                            <div>
                                <p className='drop_container_p' onClick={()=> navigate('/my-profile')}>My Profile</p>
                                <p className='drop_container_p' onClick={()=> navigate('/my-appointments')}>My Appointment</p>
                                <p className='drop_container_p' onClick={()=> setToken(false)}> Logout</p>
                            </div>
                        </div>
                        </div>
                :<button onClick={() => navigate('/login')} className='button'>Create account</button>
            }
           
        </div>
    </div>
  )
}

export default Navbar