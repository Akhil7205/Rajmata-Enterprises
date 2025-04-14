import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

import Footer from './components/Footer/Footer.jsx';

import './App.css';

import { Routers } from './components/Routers/Routers.jsx';


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
