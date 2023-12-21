import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LINKED_IN_URL } from "../../constant";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Copyright © 2023 All Rights Reserved by Nisarg Desai.</p>
        <div className="social-icons">
          <a className="linked-in" href={LINKED_IN_URL}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
