import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />
      </div>

      <div id="go-top">
        {/* <a className="smoothscroll" title="Back to Top" href="#home"><FaChevronCircleUp /></a> */}

        <AnchorLink className="smoothscroll" title="Back to Top" href='#home'><FaChevronCircleUp /></AnchorLink>
       
      </div>
    </div>
  </footer>
);

export default Footer;
