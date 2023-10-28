import React from "react";
import Navbar from "../../components/navbar/nav";
import Home from "../../components/home/home";
import About from '../../components/about/about'
import Services from '../../components/services/services'
import Gallery from '../../components/gallery/gallery'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Homepage;
