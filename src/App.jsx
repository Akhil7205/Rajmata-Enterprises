import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import WhyChooseUs from '../components/Why ChosseUs/WhyChooseUs.jsx';
import OurCustomers from '../components/OurCustomers/OurCustomers.jsx';
import OurBestServices from '../components/OurBestServices/OurBestServices.jsx';
import ContactUs from '../components/ContactUs/ContactUs.jsx'
import Footer from '../components/Footer/Footer.jsx';
import Testimonials from '../components/Testimonials.jsx';
import OurNumbers from '../components/OurNumbers/OurNumbers.jsx';
import './App.css';
import ResponsiveCardGrid from '../components/ServiceCards/ServiceCards.jsx'
import WhatWeDo from '../components/ParallaxEffect/WhatWeDo.jsx';
import ImageLayout from '../components/OurCustomers/CustomersIcon.jsx';
import Career from '../components/Career/Career.jsx';
import AboutUs from '../components/AboutUs/AboutUs.jsx';
import { Routers } from '../components/Routers/Routers.jsx';

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routers/>
      <Footer /> 
    </>
  );
}

export default App;
