import React from 'react'
import Custom from './Custom.css'

function OfferServices() {
  return (
    <div className='container-sm'>
      <h1 className='help text-center'>How can we help?</h1>
       <div className="row d-flex justify-content-center">
          <div className="col-sm-3 box1 ">
            <div className="hovereffect">
               <img src="https://img.freepik.com/free-vector/product-quality-control-abstract-concept_335657-3107.jpg?w=1380&t=st=1690286507~exp=1690287107~hmac=8c6c300b810c1d02d59e9f194766d8a4de7dd9e4978dd4bfda15317e15afe166" className='img-fluid imgService' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Conduct in-depth consultations with clients to define project goals, target audience, and desired functionalities.</p>
          </div>
          <div className="col-sm-3 box1">
            <div className="hovereffect">
              <img src="https://img.freepik.com/free-vector/mobile-application-development-programming-languages-css-html-it-ui-male-programmer-cartoon-character-developing-website-coding_335657-2367.jpg?w=1380&t=st=1690286365~exp=1690286965~hmac=ad764ab56731eac8a1e899f55e2bc816210f53348279103475182a17f78a5851" className='img-fluid' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Develop visually captivating and intuitive website designs that engage visitors and enhance user experience.</p>
          </div>
          <div className="col-sm-3 box1">
            <div className="hovereffect">
              <img src="https://img.freepik.com/free-vector/business-leadership-motivation-enterprise-management-setting-goals-achieving-success-ambitious-boss-top-manager-controlling-employees-performance_335657-2349.jpg?w=1380&t=st=1690289526~exp=1690290126~hmac=050a9210ea745a1ce08aeb04bb06c7f7dd1b9547f7541be1f1ef6322437163a5" className='img-fluid' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Utilize industry-leading technologies and coding practices to build responsive and dynamic websites.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-sm-3 box1">
            <div className="hovereffect">
              <img src="https://img.freepik.com/free-vector/social-media-star-abstract-concept-vector-illustration-influencer-social-media-reach-engagement-celebrity-account-monetization-personal-blog-star-content-creation-abstract-metaphor_335657-1719.jpg?w=1380&t=st=1690288776~exp=1690289376~hmac=6dc7f9252a65e20312a29ff6f1dd1163de1dccf013047fce787b5dc940639685" className='img-fluid imgService' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Provide content creation support, including copywriting, graphic design, and multimedia integration.</p>
          </div>
          <div className="col-sm-3 box1">
            <div className="hovereffect">
              <img src="https://img.freepik.com/free-vector/search-engine-optimization-online-promotion-smm-manager-cartoon-character-mobile-settings-tools-adjustment-business-platform-website-analysis-concept-illustration_335657-2083.jpg?w=1380&t=st=1690289597~exp=1690290197~hmac=4d1b4fb20316b38dfd1f0d261b6fa51387a1f1aa6873d3d65f2cc3c5d2c91304" className='img-fluid' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Optimize websites to improve organic search rankings and increase online visibility.</p>
          </div>
          <div className="col-sm-3 box1">
            <div className="hovereffect">
              <img src="https://img.freepik.com/free-vector/car-service-abstract-concept-illustration_335657-1842.jpg?w=1380&t=st=1690289645~exp=1690290245~hmac=904c3de2f53f24346cfbc2423796ce3214c6ddc3d7738fc66359214a227626de" className='img-fluid' alt="" />
            </div>
            <p className='service1 text-center mt-5'>Offer ongoing maintenance services, including updates, security monitoring, and performance optimization.</p>
          </div>
        </div>

      </div>
  )
}

export default OfferServices