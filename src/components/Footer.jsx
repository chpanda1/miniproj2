import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Foot.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthPlan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>Ano ilalagay?</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partners</h4>
                        <a href="/resource">
                            <p>Ano ilalagay?</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/about">
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Coming Soon!</h4>
                        <div className='socialMedia'>
                            <p><i class="materials-icon"><GitHubIcon /> @JemCorp</i></p>
                            <p><i class="materials-icon"><FacebookIcon /> @JemCorp</i></p>
                            <p><i class="materials-icon"><LinkedInIcon /> @JemCorp</i></p>
                            <p><i class="materials-icon"><InstagramIcon /> @JemCorp</i></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            {new Date().getFullYear()} JEM Corp. All right reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                        <a href='/cookieDeclaration'><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
