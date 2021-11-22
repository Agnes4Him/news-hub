import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaEnvelopeOpen } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-contents">
          <div className="socials">
            <FaTwitter className="twitter"/>
            <FaFacebook className="facebook"/>
          </div>
          <Link to="/news" style={{ textDecoration:"none" }}><h4 className="footer-news">News</h4></Link>
          <div className="email">
            <FaEnvelopeOpen className="envelope"/><p>someone@someone.com</p>
          </div>
        </div>
        <p className="copy-rights">&copy; 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;