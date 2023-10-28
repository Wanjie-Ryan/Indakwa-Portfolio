import React from 'react'
import './about.css'
import Indakwa from '../../Images/Indak-9.jpeg'


function About(){

    return(
        <>

            <section id='about' className='about-section'>

                <div className='about-container'>

                    <div className='about-shadow'>

                        <div className='actual-shadow-about'></div>

                        
                        <div className='layout-about'>
                            <div className='about-img-cont'>
                                <img src={Indakwa} className='about-img-indaks' alt='indaks-img'/>
                            </div>

                            <div className='about-details'>

                                <h1 className='about-details-intro'>Who is Eugine Indakwa?</h1>

                                <p className='eu-desc'>&#x2BC1; Hey, I am Eugine Indakwa, a versatile individual who's deeply interested in the intricate tapestry of the legal world. </p>

                                <p className='eu-desc-2'>&#x2BC1; My areas of interest span across various legal domains, and I'm well equipped to provide legal advice, conduct in-depth research, and produce well-articulated legal content.</p>

                                <p className='eu-desc-3'> &#x2BC1;However, it's essential to clarify that I'm not a practicing advocate, and everything shared on this website represents my personal opinion as a non-advocate. </p>


                            </div>


                        </div>




                    </div>


                </div>



            </section>
        
        
        </>
    )
}

export default About