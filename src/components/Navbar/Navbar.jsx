import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

const Navlink = [
   {
    id:1,
     name:"Home",
     link:"#"
   },
   {
    id:2,
     name:"About",
     link:"#"
   }
   ,{
    id:3,
     name:"Contact",
     link:"#"
   },
   {
    id:4,
     name:"Profile",
     link:"#"
   }
]


const Navbar = () => {

     const [open ,setOpen] = useState(false)

    const HandlerOpen = ()=>{
      setOpen(!open)
    }

  return (
    <div  data-aos="fade"   className=' bg-white '>
      <div className=" shadow-xl ">
       <div className='flex justify-between py-4 md:flex md:justify-around md:py-4'>

       
       <div className='font-bold'>
        <span className='  md:text-4xl p-3 md:px-4 '>Logo</span>
        </div>

        <div className='hidden  md:flex justify-between items-center'>
        <ul className='container hidden md:flex  justify-between gap-x-6  items-center   font-semibold  '>
       {
         Navlink.map(({id,name,link})=>{
           
          return(
           <li key={id}><a
            className='inline-block text-2xl py-2  '
           href={link}>{name} </a></li>
          )
         })
     
       }
       
        
        </ul> 
        </div>
        
        {/* responsive navbar  */}
    <div className='md:hidden mr-4'>
      <button onClick={HandlerOpen}  >
      <FiAlignJustify className='text-3xl' />
      </button>

       {/* Dropdown */}
      {
         open && <div>
       <ul className='bg-white space-y-3 p-8 rounded-md shadow-md absolute right-6 top-24 z-50  '>
      {
            Navlink.map(({id,name,link})=>{
           
             return(
              <li key={id}>
               <a
               className='inline-block text-xl p-2 hover:bg-blue-400 hover:text-red-500 w-full rounded-sm '
              href={link}>{name} </a></li>
             )
            })
      }
       </ul>
          </div>
      }
    </div>
 




        </div>
        </div>
    </div>
  )
}

export default Navbar
