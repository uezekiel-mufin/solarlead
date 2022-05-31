import "./footer.css";
import React from "react";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <CottageTwoToneIcon style={{ fontSize: "2rem", color: "#FFA83F" }} />
        <h5 style={{ fontSize: "1.1.5rem" }}>
          SOLARLEAD<span>FACTORY</span>
        </h5>
      </div>
      <div className='footer__middle'>
        <ul>
          <li>SolarLead</li>
          <li>Career</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          &copy; copyright SolarLead Factory
        </h3>
      </div>
      <div className='footer__end'>
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
  );
};

export default Footer;
