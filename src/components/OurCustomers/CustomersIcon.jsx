import React, { useEffect } from 'react';
import './CustomersIcon.css'; // Import your CSS file
import inoxpa2 from '../OurCustomers/clients/inoxpa2.png'
import aplimg from '../OurCustomers/clients/apl.png'
import crownimg from '../OurCustomers/clients/crown.png'
import datimg from '../OurCustomers/clients/dat.png'
import decimg from '../OurCustomers/clients/dec.png'
import eleimg from '../OurCustomers/clients/ele.png'
import enviimg from '../OurCustomers/clients/envi.png'
import ishimg from '../OurCustomers/clients/ish.png'
import kopimg from '../OurCustomers/clients/kop.png'
import mentimg from '../OurCustomers/clients/ment.png'
import naikimg from '../OurCustomers/clients/naik.png'
import niproimg from '../OurCustomers/clients/niproimg.png'
import nipro_praimg from '../OurCustomers/clients/nipro_pra.png'
import prajimg from '../OurCustomers/clients/praj.png'
import refimg from '../OurCustomers/clients/ref.png'
import roimg from '../OurCustomers/clients/ro.png'
import revtimg from '../OurCustomers/clients/revt.png'
import shiimg from '../OurCustomers/clients/shi.png'
import toyimg from '../OurCustomers/clients/toy.png'
import yinimg from '../OurCustomers/clients/yin.png'
import woodimg from '../OurCustomers/clients/wood.png'
import suroimg from '../OurCustomers/clients/suro.png'
import rose from '../OurCustomers/clients/rose.png'
import SHMZ from '../OurCustomers/clients/SHMZ.png'
import Defence from '../OurCustomers/clients/Defence.png'
import cycle from '../OurCustomers/clients/cycle.png'
import ulka from '../OurCustomers/clients/ulka.jpg'
import { Helmet } from 'react-helmet';

const ImageLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
    <div className="image-container">
      <Helmet>
  <title>Our Customers | Rajmata Enterprises Security Clients</title>
  <meta
    name="description"
    content="Rajmata Enterprises serves 27+ reputed customers including Government of Maharashtra, MNCs, Banks, Industries and more. Explore our trusted client network."
  />
  <meta name="keywords" content="Rajmata Enterprises clients, security company customers, MNC security Maharashtra, corporate security clients India" />
  <meta name="robots" content="index, follow" />
</Helmet>

      <div className="quote">
        <p>"Rajmata Enterprises have been maintaining a very long list of customer of repute for a very long period of time. Our company is treasured with various reputed establishments of Govt. of Maharashtra besides Big Corporates, MNCs, Industries, Banks, Malls etc."</p>
        <p>"We are presently providing our different services to more than 27 establishments across Maharashtra and the clients continue availing our services year after year. Many of our customers availing our services on PAN Maharashtra basis. Rajmata Enterprises believe and work for customer satisfaction round the clock. Efficient workforce is deputed at the front, well equipped with all modern facilities and technology and backed by Top Management."</p>
        <p>"Rajmata Enterprises is flooded with customer's appreciation which itself sounds its position in the market. The brand value of Rajmata Enterprises is stamp of security and reliability for the customer in large."</p>
      </div>
      <div className="logo-sections">
        <div className="logo-section"> 
          <img src={niproimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={inoxpa2} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={rose} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={yinimg} alt="sdas" />
        </div>   
        <div className="logo-section"> 
          <img src={decimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={shiimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={ishimg} alt="sdas" />
        </div>
        
       
        
        <div className="logo-section"> 
          <img src={toyimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={nipro_praimg} alt="sdas" />
        </div>
       
        <div className="logo-section"> 
          <img src={datimg} alt="sdas" />
        </div> 
        <div className="logo-section"> 
          <img src={Defence} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={kopimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={naikimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={revtimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={cycle} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={prajimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={suroimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={eleimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={enviimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={SHMZ} alt="sdas" />
        </div>
        
          
        
        <div className="logo-section"> 
          <img src={refimg} alt="sdas" />
        </div>
          <div className="logo-section"> 
          <img src={mentimg} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={crownimg} alt="sdas" />
        </div>
         <div className="logo-section"> 
          <img src={roimg} alt="sdas" />
        </div>
        
        <div className="logo-section"> 
          <img src={aplimg} alt="sdas" />
        </div>
                          
        
      
       
       
        <div className="logo-section"> 
          <img src={ulka} alt="sdas" />
        </div>
        <div className="logo-section"> 
          <img src={woodimg} alt="sdas" />
        </div>
           
      </div>
    </div>
  );
};

export default ImageLayout;
