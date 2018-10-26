import React from "react";
import { FaChevronCircleDown } from "react-icons/lib/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ScrollDown = () => (
  <p className="scrolldown">
 
    
      <AnchorLink className="smoothscroll" href='#about'>  <FaChevronCircleDown /></AnchorLink>
    
  </p>
);

export default ScrollDown;
