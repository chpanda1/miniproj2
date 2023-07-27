import React from 'react'

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
        <div className='col-lg-6 col-md-6 text-start jbgcolor'>
          <h1>Mission  </h1>
          <p className='fs-6 jcolor3'>"Our mission is to empower businesses and individuals with innovative web services that enhance their online presence, boost productivity, and drive success. Through our cutting-edge technology, exceptional customer service, and a deep understanding of our clients' needs, we strive to deliver reliable, scalable, and tailored solutions that exceed expectations."</p>
        </div>
        <div className='col-lg-6 col-md-6  text-end jbgcolor2'>
          <h1>Vission  </h1>
          <p className='fs-6 jcolor3'>"As a leading web services provider, our vision is to be the preferred choice for businesses seeking transformative digital solutions. We envision a future where our expertise in web design, development, hosting, and digital marketing drives growth and enables our clients to thrive in the digital realm. By fostering a culture of creativity, collaboration, and continuous learning, we aim to stay at the forefront of technological advancements and shape the digital landscape."</p>
        </div>
      </div>
    </div>
  )
}

export default Home
