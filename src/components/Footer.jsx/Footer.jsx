import React from 'react'
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='text-white mt-20 '>
      <div 
      data-aos="fade-down"
     
      className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl ">
       {/* heading section */}
      <h1 className='py-10 text-3xl font-bold text-yellow text-center '>Contact Us</h1>


      {/* grid section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-white pb-6'>

         {/* Address section */}
        <div className='text-center space-y-4 '>
         <div className='flex justify-center'>
          <IoLocation className='text-5xl ' />
         </div>
         <p>
          #101, 3rd Main gate,shyam Nager,Post,
      <br/> Seegehalli ,Bengauru,Karnataka
      560038
         </p>
        </div>

        {/* Email section */}
        <div className='text-center space-y-4 '>
         <div className='flex justify-center'>
         
          <IoMdMail className='text-5xl'  />
         </div>
         <p>info@goodfood.com</p>
         <p>hr@goodfood.com</p>
        </div>

          {/* Number section */}
          <div className='text-center space-y-4 '>
         <div className='flex justify-center'>
         <IoCall  className='text-5xl' />
         </div>
         
         <div>
         <p>+91 9474839529 - Sales and Service</p>
         <p>+91 9474833489 - Hiring Queries</p>
         <p>+91 94749382475 - Whatsapp</p>
        </div>
        </div>
        </div>

    {/* copyright section */}
    <div className='bg-white w-full h-1'></div>
           <div className='flex justify-between  p-4 items-center '>
            <div>
            <p>2024 TCJ. All rights reserved</p>
            </div>
            <div className='flex items-center gap-6'>
             <a href='#'>Privacy Policy</a>
             <a href='#'>Terms & Conditions</a>
            </div>

           </div>

        
       </div>
      </div>
   
  )
}

export default Footer
