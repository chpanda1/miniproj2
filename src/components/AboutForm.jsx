/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./About.css"

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
                                <p>Jasper is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quia a tempore illo odit nisi sint aliquam deserunt maiores eos aspernatur asperiores ex commodi doloremque, similique iste accusamus accusantium repellat?</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><TwitterIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="https://cdn.pixabay.com/photo/2023/03/07/01/14/ai-generated-7834779_1280.jpg" className='team-img' alt='' />
                            <h3>ELAINE TAÑADA</h3>
                            <div className='team-info'>
                                <p>Full Stack Developer</p>
                                <p>Elaine is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quia a tempore illo odit nisi sint aliquam deserunt maiores eos aspernatur asperiores ex commodi doloremque, similique iste accusamus accusantium repellat?</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><TwitterIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c3d5abe-ce6e-4685-a733-742bfa711330/dfhry2g-3eca1839-2563-4570-ac25-3ae5fb55d535.jpg/v1/fill/w_1280,h_1280,q_75,strp/ai_generated_art__war_pug_by_downtherabbitholemi_dfhry2g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjM2Q1YWJlLWNlNmUtNDY4NS1hNzMzLTc0MmJmYTcxMTMzMFwvZGZocnkyZy0zZWNhMTgzOS0yNTYzLTQ1NzAtYWMyNS0zYWU1ZmI1NWQ1MzUuanBnIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOGMzZDVhYmUtY2U2ZS00Njg1LWE3MzMtNzQyYmZhNzExMzMwXC9kb3dudGhlcmFiYml0aG9sZW1pLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.dJm5nkSh2pmxKaJK7-1TtI7T-c7pqKEzhU98l0vl3sY" className='team-img' alt='' />
                            <h3>MARK FERNANDEZ</h3>
                            <div className='team-info'>
                                <p>Full Stack Developer</p>
                                <p>Mark is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quia a tempore illo odit nisi sint aliquam deserunt maiores eos aspernatur asperiores ex commodi doloremque, similique iste accusamus accusantium repellat?</p>

                                <ul className='team-icon'>

                                    <li><a href="#" className='twitter'>
                                        <i class="materials-icon"><TwitterIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='facebook'>
                                        <i class="materials-icon"><FacebookOutlinedIcon /></i>
                                    </a></li>
                                    <li><a href="#" className='github'>
                                        <i class="materials-icon"><GitHubIcon /></i>
                                    </a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutForm
