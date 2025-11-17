import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

   const {docId} = useParams()
   const {doctors, currencySymbol } = useContext(AppContext)
   const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI', 'SAT']

   const[docInfo, setDocInfo] = useState(null)
   const [docSlots, setDocSlots] = useState([])
   const [slotIndex, setSlotIndex] = useState(0)
   const [slotTime, setSlotTime] = useState('')

   const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc=> doc._id == docId)
    setDocInfo(docInfo)
    console.log(docInfo)

   }

   const getAvailableSlots = async () => {
    setDocSlots([])

   
    let today = new Date()

    for(let i = 0; i < 7; i++ ){
      
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)
      

     
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21, 0, 0, 0)


      
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      
      let timeSlots = []


      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

       
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

       
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }

   }



   useEffect(()=>{
    fetchDocInfo()

   },[doctors,docId])



   useEffect(()=> {
    getAvailableSlots()
   },[docInfo])



   useEffect(()=> {
    console.log(docSlots);
   },[docSlots])

  return docInfo && (
    <div className='Appointment_page'>
      {/*..............*/}
      <div className='Doc_info'>
        <div className='Doc_img_con'>
          <img className='Doc_img' src={docInfo.image} alt="" />
        </div>
        <div className='Doc_notes'>
          {/*...........Doc Info: name, degree, experience ......*/ }
          <p className='Doc_notes_p'>{docInfo.name} 
          <img src={assets.verified} alt="" /></p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button> {docInfo.experience}</button>
          </div>
          {/*................Doc about ....*/}
          <div className='Doc_about'>
            <p className='Doc_about_p'>About <img src={assets.info} alt="" /> </p>
            <p>{docInfo.About}</p>
           
          </div>
           <p className='Doc_price'> Appointment fee: <span className='price' >{currencySymbol}{docInfo.fee}</span></p>
        </div>
      </div>

      {/* .........Booking slots......*/}
      <div className='Booking_slots'>
        <h1>Booking Slots</h1>
        <div className='Date_Solt'>
          {docSlots.length && docSlots.map((item,index)=>(
            <div id='Date_Solts' className={slotIndex === index ? 'selected' : 'unselected'} onClick={()=> setSlotIndex(index)} key={index} >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className='Time_Solt'>
          {docSlots.length && docSlots[slotIndex].map((item,index) => (
            <p onClick={() => setSlotTime(item.time)}  id='Time_Solts' key={index} className={item.time === slotTime ? 'selected' : 'unselected'}> 
                {item.time.toLowerCase()}
            </p>
          )
        )}
        </div>
        <div>
          <button className='Appointment_butt'> Book an appointment </button>
        </div>
      </div>

      {/*.... List of related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

    </div>
  )
}

export default Appointment