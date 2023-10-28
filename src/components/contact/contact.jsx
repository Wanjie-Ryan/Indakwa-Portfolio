import React from 'react'
import './contact.css'



function Contact(){

    return(
        <>

            <section id='contact' className='contact-container'>

                <form className='contact-form'>

                    <h1 className='send-message'>Send a message</h1>

                    <div className='inputs'>

                        <div className='hold-contact'>
                            <div className='name'>

                            <label>Name</label>
                            <input type='text'/>

                        </div>

                        <div className='name'>

                            <label>Email</label>
                            <input type='text'/>

                        </div>
                        </div>

                        <div className='name'>

                            <label>Message</label>
                            <textarea />

                        </div>




                    </div>

                    <div className='btn'><button type='submit'>Submit</button></div>



                </form>



            </section>
        
        
        </>
    )
}

export default Contact