import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Witaj</h1>
      <h3>
       Nazywam się Karol Mróz, witam na mojej stronie którą zbudowałem za pomocą HTML 5, CSS , Java Script i React JS
        
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
