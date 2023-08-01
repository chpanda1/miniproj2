import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

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
          <h3><span className='fs-1 font-weight-bold jcolor'>CONTACT US!</span><br/>We provide <br /><span className='fs-1 font-weight-bold jcolor'>HIGH QUALITY</span><br /> Web Services</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 p-3'>
          <img src="office.jpg" alt="" className='jlogo1'/>
        </div>
        <div className='col-lg-6 col-md-6 p-3 mt-3 text-center'>
          <h1 className=''>Welcome to JEM Web Page Services!</h1>
          <p className='fs-6'>We are a leading web design and development company dedicated to helping businesses establish a strong online presence. With our team of skilled professionals, we create stunning websites that not only showcase your brand but also drive results.</p>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-lg-6 col-md-6 text-start'>
          <div className='team-item jheight'>            
            <h1 className='text-bolder'>Mission  </h1>
            <div className='team-info'>
            <p className='fs-6 jcolor3'>"Our mission is to empower businesses and individuals with innovative web services that enhance their online presence, boost productivity, and drive success. Through our cutting-edge technology, exceptional customer service, and a deep understanding of our clients' needs, we strive to deliver reliable, scalable, and tailored solutions that exceed expectations."</p>
            </div>
          </div>
          {/* <h1>Mission  </h1>
          <p className='fs-6 jcolor3'>"Our mission is to empower businesses and individuals with innovative web services that enhance their online presence, boost productivity, and drive success. Through our cutting-edge technology, exceptional customer service, and a deep understanding of our clients' needs, we strive to deliver reliable, scalable, and tailored solutions that exceed expectations."</p> */}
        </div>
        <div className='col-lg-6 col-md-6  text-end'>
          <div className='team-item jheight'>            
            <h1 className=''>Vision  </h1>
            <div className='team-info'>
            <p className='fs-6 jcolor3'>"As a leading web services provider, our vision is to be the preferred choice for businesses seeking transformative digital solutions. We envision a future where our expertise in web design, development, hosting, and digital marketing drives growth and enables our clients to thrive in the digital realm. By fostering a culture of creativity, collaboration, and continuous learning, we aim to stay at the forefront of technological advancements and shape the digital landscape."</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center mb-5'>
        <div className='col-lg-12 col-md-12 mb-2'>
          <h4>We provide a fun and healthy work place environment</h4>
        </div>
        <Carousel className='col-lg-12 col-md-12'>
          {/* Change above line to <> and it works, maybe some issues in carousel */}
          <div>
            <img src="office1.jpg" alt="" className='jOfficeImg rounded-3'/>
          </div>
          <div>
            <img src="office2.jpg" alt="" className='jOfficeImg rounded-3'/>
          </div>
          <div>
            <img src="office3.jpg" alt="" className='jOfficeImg rounded-3'/>
          </div> 
          <div>
            <img src="office4.jpg" alt="" className='jOfficeImg rounded-3'/>
          </div>                                                           
        </Carousel>
      </div>
      <div className='row'>
        <h5 className='text-center'>Our Technologies </h5>
      </div>
      <div className='row text-center'>
          <div className='col-lg-12 col-md-12'>
            <img src="tech1.jpg" alt="" />
            <img src="tech2.jpg" alt="" />
            <img src="tech3.jpg" alt="" />
            <img src="tech4.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Home
