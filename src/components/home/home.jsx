import React from 'react'
import './home.css'
import Indakwa from '../../Images/Indak-8.jpeg'


function Home(){

    return(
        <>

        <section id='home' className='home-section'>

            <div className='home-container'>

                <div className='home-description'>

                    <h1 className='h1-intro'>Eugine Mushieni Indakwa</h1>

                    <p className='p-desc'>Informed Perspectives:Mushieni's Law & Policy Chronicoles </p>

                    <p className='p-desc-law'>Let's Explore the vast laws together. </p>




                </div>

                <div className='image-intro'>

                    <div className='image-shadow'>

                        <div className='shadow'>

                        </div>
                        <img src={Indakwa} alt='' className='intro-image'/>
                    </div>


                </div>



            </div>



        </section>


        </>
    )
}

export default Home