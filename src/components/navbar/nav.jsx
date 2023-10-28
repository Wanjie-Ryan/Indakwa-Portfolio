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

                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>


                </div>

                </div>




            </nav>
        
        
        </>
    )
}

export default Navbar