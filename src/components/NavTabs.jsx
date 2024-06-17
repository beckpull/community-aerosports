import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/react.svg';
import '../styles/Navbar.css';

// const styles = {

// };

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let pageTitle = '';
    switch (currentPage) {
      case '/':
        pageTitle = 'Home';
        break;
      case '/About':
        pageTitle = 'About';
        break;
      case '/Planes':
        pageTitle = 'Planes';
        break;
      case '/Services':
        pageTitle = 'Services';
        break;
      case '/Contact':
        pageTitle = 'Contact';
        break;
      default:
        pageTitle = "Community Aerosports"
        break;
    }
    document.title = `${pageTitle} | Community Aerosports`
  }, [currentPage]);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={logo} alt="logo" className='logo navbar-start' id="navbar-logo"></img>
        <p className='title is-6' id="nav-name">Community Aerosports</p>

        <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={toggleMenu}  >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'navbar-item is-active' : 'navbar-item'}>Home</Link>
          {/* <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'navbar-item is-active' : 'navbar-item'}>About Us</Link> */}
          <Link to="/Planes" onClick={toggleMenu} className={currentPage === '/Planes' ? 'navbar-item is-active' : 'navbar-item'}>Our Planes</Link>
          <Link to="/Services" onClick={toggleMenu} className={currentPage === '/Services' ? 'navbar-item is-active' : 'navbar-item'}>Available Services</Link>
          <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'navbar-item is-active' : 'navbar-item'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  )

}

export default NavTabs;