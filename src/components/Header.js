import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import Skills from "./Skills";
import ScrollDown from "./ScrollDown";


const Header = () => (
  <header id="home">
    <Navigation />
    <Banner />
    <Skills/>
    <ScrollDown />
  </header>
);

export default Header;
