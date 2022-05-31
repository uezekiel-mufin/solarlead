import React from "react";
import "./header.css";
import { Button } from "@mui/material";
import solar from "../../assets/solar panel.avif";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <h2>UNLOCKING CONSUMER DEMAND IN</h2>
        <h2>SOLAR POWER</h2>
        <h2 style={{ color: "#c0c5c9" }}>
          The web's Premier Solar Lead Expansion Hack and Solar Business
          Development
        </h2>
        <div className='btn'>
          <button
            variant='contained'
            style={{
              margin: "0 0.5rem",
              borderRadius: "1rem",
              background: "#FFA83F",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
          <button
            variant='contained'
            style={{
              borderRadius: "1rem",
              background: "#FFA83F",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            Affiliate Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
