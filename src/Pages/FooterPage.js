import React from "react";
import "./Pages.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
const FooterPage = () => {
  return (
    <footer>
      <div id="Footer_top">
        <div>
          <h3>Our Policies</h3>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Terms of Service</p>
        </div>
        <div>
          <h3>Information</h3>
          <p>About</p>
          <p>Warehouses</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>
            Incase of any queries, please reach out to us at
            prafulkatlana22@gmail.com
          </p>
        </div>
      </div>
      <div className="HR_line"></div>

      <div className="social_items">
      <a href="https://wa.me/7869582258" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </a>
      <a href="https://in.linkedin.com/in/praphul-katlana-056039194" target="_blank" rel="noopener noreferrer">
         <LinkedInIcon />
      </a>
      <a href="https://www.facebook.com/praful.katlana" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://github.com/Praphulkatlana" target="_blank" rel="noopener noreferrer">
        <GitHubIcon/>
      </a>
      </div>
      <p className="white_color_text">
        <span>&#169;</span> Copyrights All rights reserved
      </p>
    </footer>
  );
};

export default FooterPage;
