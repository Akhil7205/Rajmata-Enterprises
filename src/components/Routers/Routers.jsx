import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'
import CustomerIcon from '../OurCustomers/CustomersIcon'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import ServiceCards from '../ServiceCards/ServiceCards'
import Career from '../Career/Career'
export const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/Customers" element={<CustomerIcon/>}/>
    <Route path="/" element={<Home/>} /> 
<Route path="/AboutUs" element={<AboutUs/>}/>
<Route path="/ServiceCards" element={<ServiceCards/>}/>
<Route path="/Career" element={<Career/>}/>
    </Routes>
    </>
  )
}
