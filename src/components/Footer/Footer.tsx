import "./Footer.scss";

import uTurn from "../../assets/logos/uturn.svg";
import nextMove from "../../assets/logos/nextmove.svg";
import pinPoint from "../../assets/logos/pinpoint.svg";
import leafe from "../../assets/logos/leafe.svg";
import terra from "../../assets/logos/terra.svg";
import dune from "../../assets/logos/dune.svg";

import archMove from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="partners">
          <p>Our Partners</p>
          <div>
            <img src={uTurn} alt="U-Turn logo" />
            <img src={nextMove} alt="NextMove logo" />
            <img src={pinPoint} alt="PinPoint logo" />
            <img src={leafe} alt="Leafe logo" />
            <img src={terra} alt="Terra logo" />
            <img src={dune} alt="Dune logo" />
          </div>
        </div>
      </div>

      {/* Moved the divider outside the container */}
      <div className="divider"></div>

      <div className="container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">How It Works</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>

          <img src={archMove} alt="Archmove logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
