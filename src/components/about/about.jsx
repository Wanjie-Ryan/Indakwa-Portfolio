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

                                <h1>Who is Eugine Indakwa?</h1>


                            </div>


                        </div>




                    </div>


                </div>



            </section>
        
        
        </>
    )
}

export default About