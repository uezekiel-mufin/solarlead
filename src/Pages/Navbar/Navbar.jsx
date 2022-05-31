import React, { useState } from "react";
import "./navbar.css";
import { AppBar, Toolbar, Button, Drawer } from "@mui/material";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [links, setLinks] = useState(true);
  const [anchor, setAnchor] = useState(false);

  return (
    <>
      <AppBar
        position='static'
        style={{
          background: "#2D2D2D",
          boxShadow: " 0px 1px 4px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0",
            // marginBottom: "94px",
            paddingRight: "1rem",
            // background: "#2D2D2D",
          }}
        >
          <div className='toolbar'>
            <CottageTwoToneIcon
              style={{ fontSize: "2rem", color: "#FFA83F" }}
            />
            <h5 style={{ fontSize: "1rem" }}>
              SOLARLEAD<span>FACTORY</span>
            </h5>
          </div>
          <div className='menu__icons' onClick={() => setAnchor(!anchor)}>
            {anchor ? (
              <CloseIcon style={{ fontSize: "2rem" }} />
            ) : (
              <MenuIcon style={{ fontSize: "2rem" }} />
            )}
          </div>
          <div className='toolbar__right'>
            <ul>
              <li>SolarLead</li>
              <li>Blogs</li>
              <li>Installer login</li>
              <li>Affiliate Login</li>
              <li>Career</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <Button
              size='small'
              color='secondary'
              variant='contained'
              style={{
                margin: "0 0.5rem",
                borderRadius: "1rem",
                background: "#FFA83F",
              }}
            >
              Get Started
            </Button>
            <Button
              size='small'
              color='secondary'
              variant='outlined'
              style={{
                borderRadius: "1rem",
                background: "#FFA83F",
                color: "white",
              }}
            >
              Affiliate Program
            </Button>

            <Drawer open={anchor} onClick={() => setAnchor(!anchor)}>
              <ul
                className='small__ul'
                style={{
                  width: "10rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "2rem",
                }}
              >
                <li>SolarLead</li>
                <li>Blogs</li>
                <li>Installer login</li>
                <li>Affiliate Login</li>
                <li>Career</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
};

export default Navbar;
