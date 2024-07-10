import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/new.png';
import Image from '../assets/images/cover.png';
import '../styles/Navbar.css';

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
        pageTitle = 'Fleet';
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

  const navbarImageClass = () => {
    if (isActive) {
      return 'navbar-background-image';
    }
    return currentPage === '/' ? 'navbar-background-image-large' : 'navbar-background-image';
  };

  const navbarClass = () => {
    if (isActive) {
      return "flex items-center justify-between flex-wrap navbar-transparent p-6 shadow-md";
    } else {
      return "flex items-center justify-between flex-wrap bg-white p-6 shadow-md";
    }
  };

  const getLinkClass = (path) => {
    return currentPage === path ? 'block mt-4 md:inline-block md:mt-0 text-blue-800 hover:text-sky-300 mr-4' : 'block mt-4 md:inline-block md:mt-0 text-black hover:text-blue-400 mr-4';
  };

  return (
    <div className='navbar-image-container'>
      <nav className={navbarClass()}>
        <div className="flex items-center flex-shrink-0 text-black">
          <img src={logo} alt="logo" className='h-16 w-16'></img>
          <span className='font-semibold lg:text-3xl md:text-xl text-xl tracking-tight' id="nav-name">Community Aerosports</span>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="md:text-xl sm:text-lg px-1 py-2 border rounded text-black border-sky-300 hover:text-white hover:border-white">
            Menu
          </button>
        </div>
        <div className={`w-full ${isActive ? 'block' : 'hidden'} md:block md:flex md:items-center md:w-auto`} id="navMenu">
          <div className="lg:text-lg md:text-base sm:text-sm md:flex-grow">
            <Link to="/" onClick={toggleMenu} className={getLinkClass('/')}>Home</Link>
            <Link to="/Planes" onClick={toggleMenu} className={getLinkClass('/Planes')}>Our Fleet</Link>
            <Link to="/Services" onClick={toggleMenu} className={getLinkClass('/Services')}>Available Services</Link>
            <Link to="/Contact" onClick={toggleMenu} className={getLinkClass('/Contact')}>Contact Us</Link>
          </div>
        </div>
      </nav>
        <img src={Image} alt="banner-plane" className={`${navbarImageClass()} hidden-on-mobile`} />
    </div>
  );
}

export default NavTabs;
