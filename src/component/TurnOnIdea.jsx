import React from 'react'
import turnOnIdea from '../style/turnOnIdea.scss'
import heropag from '../Images/heropag.png'


function TurnOnIdea() {
  return (
    <div className="row container-fluid ">
        <div class="col-lg-7  col-md-12 ">
        <br/><br/><div className='hero-text1'>Turn your Ideas into SuccessfulStartups with our Comprehensive Startup Program</div>
            <br/><div className='hero-text2'>Transforming Vision into Reality</div>
            <br/><div className='hero-para'> Are you an aspiring entrepreneur with a groundbreaking idea but unsure how to turn it into a successful startup?
              Our Startup Program is designed just for you. We provide a full suite of products and services to help early-stage
              entrepreneurs bring their ideas to life, launch, deploy, and maintain their startups effectively.</div>
        </div>
         <div class="col-lg-5 col-md-12 ">
            <div className='heroimg'><img src={heropag}></img></div>
         </div>      

    </div>
  )
}

export default TurnOnIdea