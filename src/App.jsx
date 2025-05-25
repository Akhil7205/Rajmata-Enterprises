import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import { Routers } from './components/Routers/Routers.jsx';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>Rajmata Enterprises | Security Services</title>
        <meta name="description" content="Rajmata Enterprises offers professional and reliable security services for residential, industrial, and commercial clients." />
        <meta name="keywords" content="Security, Security Guard, Security Services Pune, Industrial Security, Rajmata Enterprises,rajmata enterprise,rajmata security,pune,seurity services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Header />
      <Navbar />
      <Routers />
      <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
