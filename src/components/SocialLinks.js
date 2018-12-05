import React from "react";
import {

  FaGithub,
} from "react-icons/lib/fa";

import FaLinkedin from 'react-icons/lib/fa/linkedin'

 

// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
   
    <li>
      <a href="https://github.com/MrozKarol">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/925833173">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
