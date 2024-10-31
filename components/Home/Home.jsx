import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import WhyChooseUs from '../Why ChosseUs/WhyChooseUs'
import OurNumbers from '../OurNumbers/OurNumbers'
import OurBestServices from '../OurBestServices/OurBestServices'
import ContactUs from '../ContactUs/ContactUs'
import Testimonials from '../Testimonials'
import WhatWeDo from '../ParallaxEffect/WhatWeDo'
import OurCustomers from '../OurCustomers/OurCustomers'
const Home = () => {
  return (
    <>
    <HeroSection/>
    <WhyChooseUs/>
      <OurNumbers/>
      <WhatWeDo/>
      <OurBestServices />
      <OurCustomers />
      <Testimonials/>
       <ContactUs />
      
    
    </>


  )
}

export default Home