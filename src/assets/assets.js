
import logo1 from './logo1.png'
import drop_down from './drop_down.png'
import profile from './profile_pic.png'
import group_doctors from './group_doctors.png'
import doctors_icons from './doctors_icons.jpg'
import arrow_icon from './arrow.png'
import header_img from './header_img.png'
import  General_physician from './General_physician.png'
import  Gynecologist from './Gynecologist.png'
import  Dermatologist from './Dermatologist.png'
import  Pediatricians from './Pediatricians.png'
import  Neurologist from './Neurologist.png'
import  Gastroenterologist from './Gastroenterologist.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import appointment_img from './appointment_img.png'
import verified from './verified.png'
import info from './info.png'
import about_image from './about_image.png'
import contact_image from './contact_image.png'




export const assets = {
    logo1,
    drop_down,
    profile,
    group_doctors,
    doctors_icons,
    arrow_icon,
    header_img,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    doc16,
    appointment_img,
    verified,
    info,
    about_image,
    contact_image
}

export const specialityData =[
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    }

]

export const doctors =[
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 100.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Richard James',
        image: doc2,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Duffey is fully accredited to assess and treat Sleep Apnea. He is passionate about providing preventative care and health education to his patients',
        fee: 115.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Richard James',
        image: doc3,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Dave Cumming is a Wits graduate and has been a GP for 17 years. He enjoys all aspects of Family Medicine, but has a special interest in ADHD Management and in Diabetes, and is a part of the CDE Network,',
        fee: 985.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Richard James',
        image: doc4,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
         About: 'Dr Duffey is fully accredited to assess and treat Sleep Apnea. He is passionate about providing preventative care and health education to his patients',
        fee: 395.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Richard James',
        image: doc5,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Duffey is fully accredited to assess and treat Sleep Apnea. He is passionate about providing preventative care and health education to his patients',
        fee: 450.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc6',
        name: 'Dr. Richard James',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Gibson studied at the University of Pretoria and since then has worked in a variety of fields at Stanger Hospital and in Ceres in the Cape. He has spent time at Link Hills before and then moved into Orthopedics at Port Shepstone Hospital.',
        fee: 650.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc7',
        name: 'Dr. Richard James',
        image: doc7,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Born and bred local, Dr Grinaker was raised in Hillcrest and went of to study at the University of Pretoria and graduated in 2014. Dr Grinaker enjoys emergency medicine but at the same time, gives her major frustration, it is a realNlove-hate relationship! She was mostly doing emergency medicine until she had her baby in January 2023.',
        fee: 890.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc8',
        name: 'Dr. Richard James',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Gibson studied at the University of Pretoria and since then has worked in a variety of fields at Stanger Hospital and in Ceres in the Cape. He has spent time at Link Hills before and then moved into Orthopedics at Port Shepstone Hospital.',
        fee: 567.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc9',
        name: 'Dr. Richard James',
        image: doc9,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Zondo has been with the practice since 2022 and has made a big impression on everyone she meets! She completed her internship at George Mukhari Academic Hospital and community service at Untunjambili Hospital and spent some time at King Edward Hospital in the paediatric department. She has a passion for the young ones and their families and has recently started doing IV Vitamin Drips at Link Hills. She also has an interest in addressing mental health concerns. In her free time, Dr. Amanda Zondo enjoys listening to music and watching movies.',
        fee: 978.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc10',
        name: 'Dr. Richard James',
        image: doc10,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr. James has a strong commitment to delivering comprehensive medical care ,',
        fee: 233.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc11',
        name: 'Dr. Richard James',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
          About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 900.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc12',
        name: 'Dr. Richard James',
        image: doc12,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '4 Years',
        About: 'Dr Zondo has been with the practice since 2022 and has made a big impression on everyone she meets! She completed her internship at George Mukhari Academic Hospital and community service at Untunjambili Hospital and spent some time at King Edward Hospital in the paediatric department. She has a passion for the young ones and their families and has recently started doing IV Vitamin Drips at Link Hills. She also has an interest in addressing mental health concerns. In her free time, Dr. Amanda Zondo enjoys listening to music and watching movies.',
        fee:1235.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc13',
        name: 'Dr. Richard James',
        image: doc13,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
         About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 500.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc14',
        name: 'Dr. Richard James',
        image: doc14,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
          About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 3578.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc15',
        name: 'Dr. Richard James',
        image: doc15,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '4 Years',
          About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 2705.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
      {
        _id: 'doc16',
        name: 'Dr. Richard James',
        image: doc16,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '4 Years',
          About: 'I enjoy all aspects of family practice, but being a mom of two, I have a soft spot for the kiddies that I see. I love being part of this community and making my patients healthier and happier.I obtained my medical degree at the University of Pretoria. After completing my internship and community service at McCord and Hlabisa Hospitals, we moved to Cape Town where I was a medical officer at Red Cross Children’s Hospital and Groote Schuur Neonatal Unit. Once back in KZN, I started working at Linkhills Medical Centre in 2015. ',
        fee: 3500.000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },

]