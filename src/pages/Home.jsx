import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from '../assets/images/cover.png';
import Banner from '../assets/images/banner2.jpg';
// import InstagramButtonIcon from "@/components/icons/instagramIcon";
// import FacebookIcon from "@/components/icons/facebookIcon";
// import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
// import WhatsAppIcon from '@/components/icons/whatsappIcon';
import CountUpComponent from "@/components/countUp/countUp.jsx";
// import TeamCard from "@/components/teamCard/teamCard.jsx";
import CarrouselTestimonials from "@/components/testimonials/carrouselTestimonials.jsx";
import LocationMap from "@/components/homepage/map.jsx";
import FMN1 from '@/assets/images/faafmn.png';
import FMN2 from '@/assets/images/runwayfmn.png';
import HoverCard from '@/components/homepage/FMNHoverCard';


function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 762);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 762);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hoverCard, setHoverCard] = useState(null);

  const handleHoverCardClick = () => {
    setHoverCard(true);
  };

  const handleCloseHoverCard = () => {
    setHoverCard(false);
  };

  return (
    <>
      {hoverCard === true && (
        <HoverCard onClose={handleCloseHoverCard} />
      )}
      <div style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='text-center p-1'>
          <div className="flex sm:flex-row justify-center items-center mt-1 mb-1">
            
            <span className='text-white font-medium mr-5 md:mr-15 mt-1 text-xs md:text-sm'>
              <i className="fas fa-phone mr-2 text-white"></i>
              <strong>
                <a href="tel:+15054023438"> 
                +1 (505) 402-3438
                </a>
              </strong>
            </span>

            <span className='text-white font-medium ml-5 mt-1 text-xs md:text-sm'>
              <i className="fas fa-clock mr-2 text-white"></i>
              <strong>
                <a href="https://www.google.com/maps/search/?api=1&query=Four+Corners+Regional+Airport+KFMN+1300+W+Navajo+St+Farmington+NM+87401" target="_blank" rel="noopener noreferrer">
                  M - F 9:00 AM - 5:00 PM
                </a>
              </strong>
            </span>

          </div>


          <a href="mailto:fmnflyer@outlook.com?subject=Get%20a%20Quote " target="_blank" rel="noopener noreferrer">
            <Button className='mb-1 ml-9 text-xs md:text-sm  text-white font-medium  hover:border-mainYellow hover:border-2 hover:shadow-lg hover:shadow-yellow-500/50 hover:text-customWhite' style={{ backgroundColor: '#DAA520',  borderRadius: '5px' }}>
              Send Email
            </Button>

          </a>
        </div>
        {/* <img src={Image2} alt="banner" style={{ width: '100%', height: '50vh', objectFit: 'cover',  }} /> */}

      </div>
      <div style={{ position: 'relative' }}>
        <img src={Image} alt="banner-plane" style={{ width: '100%', height: '50vh', objectFit: 'cover', display: isLargeScreen ? 'block' : 'none' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column' }}>
          {/* <WhatsAppIcon />
          <FacebookIcon />
          <InstagramButtonIcon /> */}
          {/* <LinkedinButtonIcon /> */}

        </div>
        <div className="text-center">
        <h1 className="text-center lg:text-2xl md:text-xl sm:text-lg font-bold mt-5 ml-2  mr-2">
            Ready to Take to the Skies? Discover the Thrill of Flying with Community Aerosports!
          </h1>
          <p style={{ lineHeight: '1.5' }} className=" text-left lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4 md:ml-4">
            Welcome to Community Aerosports, where your dreams of flight become reality. Whether you’ve always 
            wanted to pilot an aircraft or are looking to refine your aviation skills, our experienced team is 
            here to guide you every step of the way.
          </p>          
          <p style={{ lineHeight: '1.5' }} className="text-left lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4 md:ml-4">
            Located in the heart of Farmington, NM, Community Aerosports is led by Russell Gervase, a seasoned 
            pilot with 27 years of diverse aviation experience. Russell has flown a wide variety of planes and 
            held numerous aviation roles, bringing a wealth of knowledge and expertise to our flight school. 
            Alongside Russell is Emily, a dynamic and skilled co-instructor whose passion for aviation is matched 
            only by her dedication to student success.
          </p>
          <p style={{ lineHeight: '1.5' }} className="text-left lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4 md:ml-4">
            Join us at Community Aerosports and embark on an unforgettable journey into the world of aviation. 
            With our expert instruction and comprehensive training programs, you’ll gain the confidence and 
            competence to soar high and explore new horizons.
          </p>
          <CountUpComponent />
          <LocationMap style={{zIndex: 0}} className="w-full h-full" />
          <button className=' mt-6 cursor-pointer border-2 border-blue-400 p-1 lg:p-2 rounded hover:border-gray-100 hover:bg-blue-400 hover:text-gray-100 text-blue-500 hover:underline lg:text-lg md:text-base text-sm' onClick={handleHoverCardClick}>Offical FAA Information on KFMN</button>
          <CarrouselTestimonials />
        </div>
      </div>
    </>
  );
}

export default Home;