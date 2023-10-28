import React from 'react'
import './nav.css'
import Logo from '../../Images/Logo.png'



function Navbar (){
    return(

        <>

            <nav className='nav'>

                <div className='nav-container'>

                <div className='site-logo'>

                    <img src={Logo} alt='logo' className='logo'/>


                </div>

                <div className='nav-links'>

                    <div className='home'><p className='home-p'>Home</p></div>
                    <div className='home'><p className='about'>About</p></div>
                    <div className='home'><p className='service'>Services</p></div>
                    <div className='home'><p className='contact'>Contact</p></div>


                </div>

                </div>




            </nav>
        
        
        </>
    )
}

export default Navbar