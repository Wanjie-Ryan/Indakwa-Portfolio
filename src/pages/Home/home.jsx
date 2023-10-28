import React from "react";
import Navbar from "../../components/navbar/nav";
import Home from "../../components/home/home";
import About from '../../components/about/about'

function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
    </>
  );
}

export default Homepage;
