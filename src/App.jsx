import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
import Footer from './components/Footer.jsx/Footer'
import AOS from 'aos';
import "aos/dist/aos.css";




const App = () => {

  useEffect(()=>{
    AOS.init({
     offset:100,
     duration:800,
     easing:"ease-in-sine",
     delay:100,
   });
   AOS.refresh();
 
 },[]);



  return (
    <div className='overflow-x-hidden'>
     <Navbar />
      <Hero />
      <Banner />
      <ContactUs />
      <About />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
