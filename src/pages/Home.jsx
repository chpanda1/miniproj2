import React from 'react'
import { UserCard, FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';

function Home() {
  return (
    <div className='container-fluid'>
      <div className='row bg-black'>
        <div className='col-lg-1 col-md-1 p-5'>
          <img src="JEM2.png" alt="" className='jlogo' />
        </div>
        <div className='col-lg-10 col-md-10 mt-lg-5 mt-md-3 pt-lg-5 pt-md-5 text-end jcolor2'>
          <br />
          <br />
          <h4>Need a Website for your startup?</h4>
          <h3><span className='fs-1 font-weight-bold jcolor'>COME! CONTACT US!</span><br/>We provide <br /><span className='fs-1 font-weight-bold jcolor'>HIGH QUALITY</span><br /> Web Services</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 p-3'>
          <img src="office.jpg" alt="" className='jlogo1'/>
        </div>
        <div className='col-lg-6 col-md-6 p-3 mt-3 text-center'>
          <h1 className='jcolor'>Welcome to JEM Web Page Services!</h1>
          <p className='fs-6 jcolor2'>We are a leading web design and development company dedicated to helping businesses establish a strong online presence. With our team of skilled professionals, we create stunning websites that not only showcase your brand but also drive results.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 text-start'>
          <div className='team-item jheight'>            
            <h1 className='jcolor'>Mission  </h1>
            <div className='team-info'>
            <p className='fs-6 jcolor3'>"Our mission is to empower businesses and individuals with innovative web services that enhance their online presence, boost productivity, and drive success. Through our cutting-edge technology, exceptional customer service, and a deep understanding of our clients' needs, we strive to deliver reliable, scalable, and tailored solutions that exceed expectations."</p>
            </div>
          </div>
          {/* <h1>Mission  </h1>
          <p className='fs-6 jcolor3'>"Our mission is to empower businesses and individuals with innovative web services that enhance their online presence, boost productivity, and drive success. Through our cutting-edge technology, exceptional customer service, and a deep understanding of our clients' needs, we strive to deliver reliable, scalable, and tailored solutions that exceed expectations."</p> */}
        </div>
        <div className='col-lg-6 col-md-6  text-end'>
          <div className='team-item jheight'>            
            <h1 className='jcolor'>Vission  </h1>
            <div className='team-info'>
            <p className='fs-6 jcolor3'>"As a leading web services provider, our vision is to be the preferred choice for businesses seeking transformative digital solutions. We envision a future where our expertise in web design, development, hosting, and digital marketing drives growth and enables our clients to thrive in the digital realm. By fostering a culture of creativity, collaboration, and continuous learning, we aim to stay at the forefront of technological advancements and shape the digital landscape."</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <h5 className='text-center'>This Project is created using : </h5>
      </div>
      <div className='row text-center'>
          <div className='col-lg-4 col-md-4'>
            <h1><JavascriptIcon sx={{fontSize:'inherit'}}/></h1>
          </div>
          <div className='col-lg-4 col-md-4'>
            <h1><HtmlIcon sx={{fontSize:'inherit'}}/></h1>
          </div>
          <div className='col-lg-4 col-md-4'>
            <h1><CssIcon sx={{fontSize:'inherit'}}/></h1>
          </div>
      </div>
    </div>
  )
}

export default Home
