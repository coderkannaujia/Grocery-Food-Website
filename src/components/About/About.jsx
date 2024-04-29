import React from 'react'
import BgPolygon from '/image/polygon.png'
import vector from '/image/vector-wave.png'
import { FaUser } from "react-icons/fa";



const BgStyle = {

 backgroundImage:`url(${BgPolygon})`,
 backgroundRepeat:"no-repeat",
 backgroundPosition:"center",
 backgroundSize:"cover",
 width:"100%",
 height:"100%",
 position:"relative"

}


const  About = () => {
  return (

   <div style={BgStyle} className='py-14 '  >
    <div className='container min-h-[500px] relative z-10 '>
    <h1 
    data-aos="fade"
    className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About US </h1> 
  
     {/* card section */}
  <div 
  data-aos="fade"
  data-aos-delay="300"
  className='bg-white/80 p-10 my-10     '>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ullam ab aspernatur excepturi sed nobis est impedit temporibus, odit amet quis sunt dolore nostrum sit sapiente! Nesciunt recusandae eligendi sint.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum inventore ab atque? Iure totam, in corrupti laborum quos alias cum sequi dolore vel. Eligendi accusamus ipsam dolorum id laudantium!
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum laboriosam illum ullam debitis voluptatibus quia! Facere doloremque quo libero, molestias nam fugit illum magni cupiditate mollitia, enim animi incidunt?
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil delectus voluptas iusto a consequatur commodi ullam! Aut voluptatum sint, id iusto distinctio corrupti vitae soluta reiciendis similique expedita optio omnis!

 

 <div className='pt-10 justify-center '>
<button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2  ml-[400px] sm:ml-[160px]  hover:scale-105 duration-300'>
<FaUser className=''  /> My Account 
</button>
 </div>
 </div>
    </div>

    {/* wave vector */}
    <div className='absolute top-0 right-0  w-full ' >
     <img src={vector} alt='vector' className='mx-auto'  />
    </div>
    </div>
  )
}

export default  About
