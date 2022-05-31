import React from "react";
import "./about.css";
import data from "./aboutData";
import Engineer from "../../assets/engineers.png";
import Laptop from "../../assets/laptop.png";
import { Button } from "@mui/material";
const About = () => {
  return (
    <div className='about'>
      <h3 className='who'>Who we are and what we do</h3>
      <div className='container'>
        {data.map((item, index) => (
          <div key={index} className='grid'>
            <div
            // style={{
            //   display: "flex",
            //   gap: "0.5rem",
            //   justifyContent: "center",
            // }}
            >
              <h2 style={{ color: "#FFA83F", fontSize: "1.5rem" }}>
                {item.icon}
              </h2>
              <h2> {item.title}</h2>
            </div>
            <h5>{item.description}</h5>
          </div>
        ))}
      </div>
      <div className='about__header'>
        <h4>Contact Us Today:</h4>
        <h4 style={{ color: "#205097" }}>(415) 562-495 </h4>
        <h4>or</h4>
        <h4 style={{ color: "#205097" }}>sales@solarleadfactory.com</h4>
      </div>
      <div className='about__contact'>
        <img src={Engineer} alt='engineers' />
        <div className='contact__description'>
          <h2>SUPERCHARGE YOUR SALES TEAM</h2>
          <h5>
            Get more time to focus on what matters: selling and installing
            solar. Automate lead-gen, only pay for what you want, and skyrocket
            your business growth
          </h5>
          <Button
            variant='contained'
            color='secondary'
            style={{ borderRadius: "1rem", background: "#FFA83F" }}
          >
            Get Started in Seconds
          </Button>
        </div>
      </div>
      <div className='about__contact'>
        <div className='contact__description'>
          <h2>SUPERCHARGE YOUR TRAFFIC REVENUE</h2>
          <h5>
            Join an industry-leading affiliate program, get paid more for your
            traffic and help us accelerate the adoption rate of solar power.
          </h5>
          <Button
            variant='contained'
            color='secondary'
            style={{ borderRadius: "1rem", background: "#FFA83F" }}
          >
            Join our Afilliate Program
          </Button>
        </div>
        <img src={Laptop} alt='engineers' />
      </div>
    </div>
  );
};

export default About;
