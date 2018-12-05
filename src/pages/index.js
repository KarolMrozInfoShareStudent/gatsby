import React from "react";


import "../assets/css/main.css";



import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";

import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import Portfolio from "../components/Portfolio";

const IndexPage = () => (
  <div>
 
    <Header />
    <About />
    <Resume />
    <Testimonials />
    <Footer />
  </div>
);

export default IndexPage;
