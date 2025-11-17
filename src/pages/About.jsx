import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='About_page'>


      <div className='About_heading'>
         <p>ABOUT US</p>
      </div>

      <div className='About_content'>
        <img className='About_pic' src={assets.about_image} alt="" />
        <div className='About_paragraphs'>
          <p>Life, health and care are enshrined in everything we do. We carry this emphasis through in our dedication to well-being and quality of life, clinical excellence in world-class facilities, quality service, respect and a spirit of giving to those entrusted to our care. With life at the core of everything we do, the critical components of health and care hold everything together. Our purpose is making life better. And we fulfil that purpose by means of our compassionate and patient-centric approach.</p>
          <p>Our team of specialists possesses extensive competence and knowledge in the field of medicine, further strengthening our ability to provide top-quality care. Our organisation’s core values are centred around respect for our patients, the pursuit of knowledge, wisdom, and the sharing of expertise, and a steadfast commitment to honesty, integrity, and compassion. These values are at the heart of our mission to deliver the highest quality of care for the best quality of life and are reflected in everything we do.</p>
          <b> Our Mission</b>
          <p>To lead by example, to deploy technology, staff, and knowledge with wisdom and empathy, to be a destination of choice, and a partner to all stakeholders. Founded on the principles of governance and ethics, embracing “Batho Pele” and respecting our patients’ need for confidentiality, dignity, and honesty.</p>
        </div>
      </div>

      <div className='About_heading'>
        <p>WHY <span>CHOOSE US</span></p>
      </div>

      <div className='Why-us_con'>

        <div className='Why-us_Content'>
          <b>EFFiCIENCY:</b>
          <p>Streamined Appointment Scheduling That fits into Your Busy Lifestyle</p>
        </div>
        <div className='Why-us_Content'>
          <b>CONVENIENCE:</b>
          <p>Access To A Network Of Trusted Healthcare Professionals In Your Area</p>
       </div>
       <div className='Why-us_Content'>
          <b> PERSONALIZATION:</b>
          <p>Tailared Recommendations And Reminders To Help You Stay On Top Of Your </p>
       </div>

      </div>

    </div>

  
  )
}

export default About