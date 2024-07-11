import React, { useState, useEffect } from 'react';
import Image from '../assets/images/cover.png';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import WhatsAppIcon from '@/components/icons/whatsappIcon';
import CountUpComponent from "@/components/countUp/countUp.jsx";
import TeamCard from "@/components/teamCard/teamCard.jsx";
import CarrouselTestimonials from "@/components/testimonials/carrouselTestimonials.jsx";
import LocationMap from "@/components/mapHomePage/map.jsx";

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

  return (
    <>
      <div style={{ position: 'relative' }}>
        {isLargeScreen && (
          <>
            <img src={Image} alt="banner-plane" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column' }}>
              <WhatsAppIcon />
              <FacebookIcon />
              <InstagramButtonIcon />
              <LinkedinButtonIcon />
            </div>
          </>
        )}
      </div>
      <div className="text-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-lg font-bold mt-5 ml-1 mr-1 italic">Welcome to Community Aerosports</h1>
        <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <CountUpComponent />
        <TeamCard />
        <LocationMap />
        <CarrouselTestimonials />
      </div>
    </>
  );
}


export default Home;
