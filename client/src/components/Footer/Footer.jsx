import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dolore vitae placeat nostrum modi aut officia qui. Beatae, ipsum
            excepturi.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Rajdeep Heights, Delhi</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0471 6543 abcd 9087 </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@jsdevgmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Speakers</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms and Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                HeadStore Created By sonal
            </div>
            <img src={Payment}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
