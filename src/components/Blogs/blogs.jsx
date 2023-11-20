import React, {useState,useEffect} from 'react'
import './blogs.css'
import axios from 'axios'



function Blogs (){

    const [blogs, setBlogs] = useState([])


    useEffect(()=>{

        const getBlogs = async()=>{


            try{


            }

            catch(err){

                console.log(err)
            }




        }

        getBlogs()




    }, [])



    return(


        <>

            <section className='blogs'>

                <p className='blogs-p'>My Blogs</p>

                <div className='blogs-container'>




                </div>




            </section>
        
        
        
        </>
    )
}

export default Blogs