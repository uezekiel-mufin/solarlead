import React from "react";
import "./header.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='header'
    >
      <div className='header__content'>
        <h2>UNLOCKING CONSUMER DEMAND IN</h2>
        <h2>SOLAR POWER</h2>
        <h2 style={{ color: "#c0c5c9" }}>
          The web's Premier Solar Lead Expansion Hack and Solar Business
          Development
        </h2>
        <div className='btn'>
          <Button
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
          </Button>
          <Button
            variant='contained'
            style={{
              borderRadius: "1rem",
              background: "#FFA83F",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            Affiliate Program
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
