import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/AvatarKarolM.png";
//zdjecie profilowe//
const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>O mnie</h2>
        <p>
          quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Dane Kontaktowe</h2>
            <p className="address">
              <span>Karol Mróz</span>
              <br />
              <span> 
                <br /> Gdańsk Polska
              </span>
              <br />
              <span>+ 48 660-672-165</span>
              <br />
              <span>mroz.karol@yahoo.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Pobierz CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
