import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/new.png';
import Image from '../assets/homepage/banner.jpg';
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

  // Función para determinar la clase de la imagen del navbar
  const navbarImageClass = () => {
    return currentPage === '/' ? 'navbar-background-image-large' : 'navbar-background-image';
  };

  return (
    <div className='navbar-image-container'>
      
      <nav className="flex items-center justify-between flex-wrap navbar-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-black">
          <img src={logo} alt="logo" className='h-16 w-16'></img>
          <span className='font-semibold text-xl tracking-tight' id="nav-name">Community Aerosports</span>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="px-1 py-2 border rounded text-black border-sky-300 hover:text-white hover:border-white">
            Menu
          </button>
        </div>
        <div className={`w-full ${isActive ? 'block' : 'hidden'} md:block md:flex md:items-center md:w-auto`} id="navMenu">
          <div className="text-sm md:flex-grow">
            <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4'}>Home</Link>
            {/* <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>About Us</Link> */}
            <Link to="/Planes" onClick={toggleMenu} className={currentPage === '/Planes' ? 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4'}>Our Planes</Link>
            <Link to="/Services" onClick={toggleMenu} className={currentPage === '/Services' ? 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4'}>Available Services</Link>
            <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4'}>Contact Us</Link>
          </div>
        </div>
      </nav>
      <img src={Image} alt="banner-plane" className={navbarImageClass()} />
    </div>
  );

}

export default NavTabs;