import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Custom from './Custom.css'




function JobsList() {
  return (
    <div>
      <div className="container">
        <h1 className='topic text-center'>We are Hiring!</h1>
        <p className='para text-center mx-10'>Ready to embrace the challenge of collaborating with global tech companies? Submit your CV now and explore exciting open positions below!</p>
        <div className="row">
          <div className="col-md-5">
            <h2 className='detail text-left'>Embracing Innovation, <br /> Partnering with Tech Titans</h2>
            <p className='para2'>Empowering top-notch Filipino software engineers to collaborate with renowned global tech companies, unlocking limitless opportunities for career growth and skill enhancement within international engineering teams. <br /><br />
            We are an empowering and progressive workplace, steadfast in our commitment to fostering staff development, engagement, and well-being.</p>
              <button className='applybtn btn btn-warning w-50'>Apply Now</button>
          </div>
          <div className="col-md-7">
            <img src="https://t4.ftcdn.net/jpg/02/78/37/47/360_F_278374738_ypRn0utOVnebuhmpSrDiwkzFsdqEm0aa.jpg" className='img-fluid developer1' alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className='topic2 text-left'>JEM Employee Perks & Benefits</h1>
        <h3 className='para3 text-left'>Empowering People, Driving Success</h3>
        <h3 className='para3 text-left'>Caring for Our Team, Fueling Our Success</h3>
        <div className="row">
          <div className="col-md-6">
            <h6 className='perks text-left'>Health First</h6>
            <p className='details3'>Prioritizing well-being and safety above all else.</p>
            <br />
            <h6 className='perks text-left'>Education</h6>
            <p className='details3'>The process of acquiring knowledge, skills, and understanding through formal instruction or self-learning</p>
            <br />
            <h6 className='perks text-left'>Social</h6>
            <p className='details3'>Significance and impact of one's professional interactions, relationships, and contributions on the well-being and cohesion of the broader community or society.</p>
          </div>
          <div className="col-md-6">
            <h6 className='benefits text-left'>Mental Health & Wellness</h6>
            <p className='details4'>Encompass the promotion and support of employees' emotional well-being, psychological resilience, and work-life balance to foster a healthy and productive workforce.</p>
            <br />
            <h6 className='benefits text-left'>Work from Home</h6>
            <p className='details4'>Carrying out their job responsibilities remotely, typically from their own residences, using digital communication and collaboration tools.</p>
            <br />
            <h6 className='benefits text-left'>Health Maintenance Organization</h6>
            <p className='details4'>Healthcare insurance plan that typically requires members to choose a primary care physician and obtain referrals for specialist care within a network of healthcare providers.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid backg">
      <div className="row">
          <div className="col-md-6 text-center">
          <img src="./JEM2.png" className='img-fluid logo' alt="" />
          </div>
          <div className="col-md-6">
            <h2 className='detail2 text-left'>If you’re interested to know more about <br /> our employee benefits and perks,<br /> you can download the booklet.</h2>
            <button className='downloadbtn btn btn-warning w-50 mt-5'>Download</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className='topic2 text-left'>Submit your CV today!</h1>
            <h5 className='para5 text-left'>One of our recruitment officers will get in touch with you!</h5>
            <form>
              <div class="form-outline w-75 mt-3">
                <input type="text" id="typeText" class="form-control formControl" placeholder="Name *" />
                <input type="email" id="typeText" class="form-control formControl mt-2" placeholder="Email Address *"/>
                <input type="text" id="typeText" class="form-control formControl mt-2" placeholder="Mobile Number *" />
                <select class="form-control mt-2" placeholder='Position applying for *'>
                  <option>Position applying for *</option>
                  <option>Back-end Developer *</option>
                  <option>Front-end Developer *</option>
                  <option>Full-stack Developer</option>
                  <option>UI/UX Design</option>
                </select>
                <select class="form-control mt-2" placeholder='Where did you hear about us? *'>
                  <option>Where did you hear about us</option>
                  <option>Email</option>
                  <option>Linkedin</option>
                  <option>Facebook</option>
                  <option>Word of Mout</option>
                  <option>Other</option>
                </select>
                <input type="text" id="typeText" class="form-control formControl mt-2" placeholder="Enter your primary skills..." />
                <button className='submitbtn btn btn-warning w-50 mt-5'>Submit</button>
              </div>
            </form>
        </div>
          <div className="col-md-6">
            <img src="https://t4.ftcdn.net/jpg/01/89/08/13/360_F_189081325_yAqPV5OBDKXmaC41cy6k3tZHNDqjlZoZ.jpg" className='img-fluid developer1' alt="" />
          </div>
        </div>
      </div>
      <div className="container jobs">
      
      <Accordion defaultActiveKey="0" className='jobs w-75 mt-5'>
      <h1 className='jobslist'>Our live jobs</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h5 className='jobsTitle'>Frontend React Developer</h5></Accordion.Header>
          <Accordion.Body>
            <h2 className='jobsposition text-center'>Frontend React Developer</h2>
            <h6 className='jobsposition text-center'>Offshoring Software Engineering | Tech Staffing & Recruitment | UK | Australia | Philippines</h6>
            <p>A cutting-edge Filipino-owned enterprise established today, serves as the premier liaison connecting top-notch software engineers in the Philippines with the forefront of global tech innovators. Our platform empowers developers to seamlessly integrate into international engineering teams while working remotely from the Philippines, enabling them to elevate their resumes and skill sets, all while contributing to the success of our esteemed company, JEM Web Services.</p>
            <h4 className='jobsDetails'>Role Overview</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Should be experienced in React for the front end and Typescript backend.</li>
              <li>Should be confident in managing AWS and various APIs required for processing and hosting the company’s LLM, client data, and various 3rd party services.</li>
            </ul>
            <h4 className='jobsDetails'>Candidate Requirements</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Experience with AWS and various APIs required for processing and hosting the company's LLM, client data, and various 3rd party services.</li>
              <li>Excellent problem-solving skills and ability to work independently and as part of a team.</li>
              <li>Strong communication and interpersonal skills.</li>
            </ul>
            <h4 className='jobsDetails'>Salary, Incentive, and Benefits Packages</h4>
            <ul>
              <li>Competitive Salary Package</li>
              <li>Benefits package include HMO, training allowance, gym or food allowance, educational assistance for dependent, and more</li>
              <li>An annual salary increase, as laid out in the contract</li>
              <li>Free food and drinks provided in the office</li>
              <li>Company trips</li>
            </ul>

            <p>Do you think you are ready for the challenge? Apply now!​</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h5 className='jobsTitle'>Backend Developer</h5></Accordion.Header>
          <Accordion.Body>
            <h2 className='jobsposition text-center'>Frontend React Developer</h2>
            <h6 className='jobsposition text-center'>Offshoring Software Engineering | Tech Staffing & Recruitment | UK | Australia | Philippines</h6>
            <p>A cutting-edge Filipino-owned enterprise established today, serves as the premier liaison connecting top-notch software engineers in the Philippines with the forefront of global tech innovators. Our platform empowers developers to seamlessly integrate into international engineering teams while working remotely from the Philippines, enabling them to elevate their resumes and skill sets, all while contributing to the success of our esteemed company, JEM Web Services.</p>
            <h4 className='jobsDetails'>Role Overview</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Should be experienced in React for the front end and Typescript backend.</li>
              <li>Should be confident in managing AWS and various APIs required for processing and hosting the company’s LLM, client data, and various 3rd party services.</li>
            </ul>
            <h4 className='jobsDetails'>Candidate Requirements</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Experience with AWS and various APIs required for processing and hosting the company's LLM, client data, and various 3rd party services.</li>
              <li>Excellent problem-solving skills and ability to work independently and as part of a team.</li>
              <li>Strong communication and interpersonal skills.</li>
            </ul>
            <h4 className='jobsDetails'>Salary, Incentive, and Benefits Packages</h4>
            <ul>
              <li>Competitive Salary Package</li>
              <li>Benefits package include HMO, training allowance, gym or food allowance, educational assistance for dependent, and more</li>
              <li>An annual salary increase, as laid out in the contract</li>
              <li>Free food and drinks provided in the office</li>
              <li>Company trips</li>
            </ul>

            <p>Do you think you are ready for the challenge? Apply now!​</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><h5 className='jobsTitle'>Full Stack Developer</h5></Accordion.Header>
          <Accordion.Body>
            <h2 className='jobsposition text-center'>Frontend React Developer</h2>
            <h6 className='jobsposition text-center'>Offshoring Software Engineering | Tech Staffing & Recruitment | UK | Australia | Philippines</h6>
            <p>A cutting-edge Filipino-owned enterprise established today, serves as the premier liaison connecting top-notch software engineers in the Philippines with the forefront of global tech innovators. Our platform empowers developers to seamlessly integrate into international engineering teams while working remotely from the Philippines, enabling them to elevate their resumes and skill sets, all while contributing to the success of our esteemed company, JEM Web Services.</p>
            <h4 className='jobsDetails'>Role Overview</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Should be experienced in React for the front end and Typescript backend.</li>
              <li>Should be confident in managing AWS and various APIs required for processing and hosting the company’s LLM, client data, and various 3rd party services.</li>
            </ul>
            <h4 className='jobsDetails'>Candidate Requirements</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Experience with AWS and various APIs required for processing and hosting the company's LLM, client data, and various 3rd party services.</li>
              <li>Excellent problem-solving skills and ability to work independently and as part of a team.</li>
              <li>Strong communication and interpersonal skills.</li>
            </ul>
            <h4 className='jobsDetails'>Salary, Incentive, and Benefits Packages</h4>
            <ul>
              <li>Competitive Salary Package</li>
              <li>Benefits package include HMO, training allowance, gym or food allowance, educational assistance for dependent, and more</li>
              <li>An annual salary increase, as laid out in the contract</li>
              <li>Free food and drinks provided in the office</li>
              <li>Company trips</li>
            </ul>

            <p>Do you think you are ready for the challenge? Apply now!​</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><h5 className='jobsTitle'>UI/UX Design</h5></Accordion.Header>
          <Accordion.Body>
            <h2 className='jobsposition text-center'>Frontend React Developer</h2>
            <h6 className='jobsposition text-center'>Offshoring Software Engineering | Tech Staffing & Recruitment | UK | Australia | Philippines</h6>
            <p>A cutting-edge Filipino-owned enterprise established today, serves as the premier liaison connecting top-notch software engineers in the Philippines with the forefront of global tech innovators. Our platform empowers developers to seamlessly integrate into international engineering teams while working remotely from the Philippines, enabling them to elevate their resumes and skill sets, all while contributing to the success of our esteemed company, JEM Web Services.</p>
            <h4 className='jobsDetails'>Role Overview</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Should be experienced in React for the front end and Typescript backend.</li>
              <li>Should be confident in managing AWS and various APIs required for processing and hosting the company’s LLM, client data, and various 3rd party services.</li>
            </ul>
            <h4 className='jobsDetails'>Candidate Requirements</h4>
            <ul>
              <li>Continue building out the product to make it enterprise-ready.</li>
              <li>Experience with AWS and various APIs required for processing and hosting the company's LLM, client data, and various 3rd party services.</li>
              <li>Excellent problem-solving skills and ability to work independently and as part of a team.</li>
              <li>Strong communication and interpersonal skills.</li>
            </ul>
            <h4 className='jobsDetails'>Salary, Incentive, and Benefits Packages</h4>
            <ul>
              <li>Competitive Salary Package</li>
              <li>Benefits package include HMO, training allowance, gym or food allowance, educational assistance for dependent, and more</li>
              <li>An annual salary increase, as laid out in the contract</li>
              <li>Free food and drinks provided in the office</li>
              <li>Company trips</li>
            </ul>

            <p>Do you think you are ready for the challenge? Apply now!​</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  )
}

export default JobsList



