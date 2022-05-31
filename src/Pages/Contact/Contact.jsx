import "./contact.css";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
const Contact = () => {
  return (
    <div className='contact'>
      <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>
        Get in Touch With Us
      </h2>
      <h5>
        We would love to hear from you and assist you in any way possible in
        getting started
      </h5>

      <div className='form__section'>
        <div className='form'>
          <div className='form__top'>
            <h2 style={{ textAlign: "center", marginTop: "2.5rem" }}>
              Send Us a message
            </h2>

            <TextField
              placeholder='Name'
              fullWidth
              variant='standard'
              margin='normal'
              style={{ marginTop: "3rem" }}
            />
            <TextField
              placeholder='email'
              fullWidth
              variant='standard'
              margin='normal'
              style={{ marginTop: "3rem" }}
            />
            <TextField
              placeholder='Your Message'
              fullWidth
              variant='standard'
              margin='normal'
              style={{ marginTop: "3rem" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              alignContent: "center",
              background:
                "linear-gradient(236.22deg, #FFA83F 29.96%, #FF712C 72%)",
              height: "86px",
            }}
          >
            <Button style={{ color: "white", fontSize: "2rem" }}>Submit</Button>
          </div>
        </div>
        <div className='address__section'>
          <div className='address'>
            <h2>Address</h2>
            <h5 style={{ fontWeight: 200, fontSize: "16px" }}>
              326 West 89th Street, Upper West Side, New York, USA
            </h5>
          </div>
          <div className='address'>
            <h2>Call Us</h2>
            <h5 style={{ fontWeight: 200, fontSize: "16px" }}>(414) 562-495</h5>
          </div>
          <div className='address'>
            <h2>Mail Us</h2>
            <h5 style={{ fontWeight: 200, fontSize: "16px" }}>
              sales@solarleadfactory.com
            </h5>
          </div>
          <div className='address'>
            <h2>Social Media</h2>
            <ul>
              <li>
                <GrInstagram style={{ fontSize: "1.5rem", color: "#48DDFE" }} />
              </li>
              <li>
                <FaLinkedin style={{ fontSize: "1.5rem", color: "#48DDFE" }} />
              </li>
              <li>
                <FaFacebookF style={{ fontSize: "1.5rem", color: "#205097" }} />
              </li>
              <li>
                <GrTwitter
                  style={{
                    fontSize: "1.5rem",
                    color: "#FB398B",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;