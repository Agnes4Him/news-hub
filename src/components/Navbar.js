import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="news-nav">
      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
          <Link to="/news" style={{ textDecoration: 'none' }}><li>News</li></Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}><li>Contact Us</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;