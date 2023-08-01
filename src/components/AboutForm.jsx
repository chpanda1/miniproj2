/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./About.css"
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 15px;
  padding: 5px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function AboutForm() {
    let message = `JEM Web Services is poised to become a prominent player in the website creation industry.`;
    return (
        <section className='section-white'>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-12 text-center'>
                        <h2 className='section-title'>
                            The Team Behind JEM
                        </h2>
                        <p className='section-subtitle'>{message}</p>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="https://img.freepik.com/premium-photo/3d-cartoon-panda-with-backpack_380557-97.jpg" className='team-img' alt='' />
                            <h3>JASPER NAVALES</h3>
                            <div className='team-info'>
                                <p>Full Stack Developer</p>
                                <p>I am a Full-stack web developer from Mandaluyong, Metro Manila, Philippines. Currently studying to be a full time Full-stack developer at Kodego.</p>
                                <p>I love working on Web Development and Deep Learning. My goal is to build highly performant websites that solve real-world problems and provide users with an awesome experience.</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><InstagramIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                            <a href="https://chpanda1.github.io" target="_blank">
                                <Button> My Portfolio </Button>
                            </a>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="https://cdn.pixabay.com/photo/2023/03/07/01/14/ai-generated-7834779_1280.jpg" className='team-img' alt='' />
                            <h3>ELAINE TAÑADA</h3>
                            <div className='team-info'>
                                <p>Full Stack Developer</p>
                                <p>As a passionate full-stack developer, I am driven by the art of crafting elegant and functional applications that seamlessly combine front-end and back-end technologies. With a relentless pursuit of innovation and a love for problem-solving, consistently delivers robust solutions that elevate user experiences and push the boundaries of web development.</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><InstagramIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                            <a href="https://elainetanada.github.io/eportfolio.github.io/" target="_blank">
                                <Button> My Portfolio </Button>
                            </a>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c3d5abe-ce6e-4685-a733-742bfa711330/dfhry2g-3eca1839-2563-4570-ac25-3ae5fb55d535.jpg/v1/fill/w_1280,h_1280,q_75,strp/ai_generated_art__war_pug_by_downtherabbitholemi_dfhry2g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjM2Q1YWJlLWNlNmUtNDY4NS1hNzMzLTc0MmJmYTcxMTMzMFwvZGZocnkyZy0zZWNhMTgzOS0yNTYzLTQ1NzAtYWMyNS0zYWU1ZmI1NWQ1MzUuanBnIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOGMzZDVhYmUtY2U2ZS00Njg1LWE3MzMtNzQyYmZhNzExMzMwXC9kb3dudGhlcmFiYml0aG9sZW1pLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.dJm5nkSh2pmxKaJK7-1TtI7T-c7pqKEzhU98l0vl3sY" className='team-img' alt='' />
                            <h3>MARK FERNANDEZ</h3>
                            <div className='team-info'>
                                <p>Full Stack Developer</p>
                                <p>As a new Full Stack Developer, ready to embark on an exhilarating journey in the world of web development. Armed with a passion for technology and a firm grasp of both front-end and back-end technologies, I am eager to craft immersive digital experiences that captivate users and push the boundaries of what is possible. Through continuous learning, creative problem-solving, and a tenacious spirit.</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><InstagramIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                            <a href="https://mfernandez0928.github.io/Eportfolio/" target="_blank">
                                <Button> My Portfolio </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutForm
