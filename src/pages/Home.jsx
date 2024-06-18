import Image from '../assets/homepage/banner.jpg';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import CountUpComponent from "@/components/countUp/countUp.jsx";
import TeamCard from "@/components/teamCard/teamCard.jsx";
import CarrouselTestimonials from "@/components/testimonials/carrouselTestimonials.jsx";


function Home() {
  return (
    <>
    <div style={{ position: 'relative' }}>
      <img src={Image} alt="banner-plane" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column' }}>
        <FacebookIcon />
        <InstagramButtonIcon />
        <LinkedinButtonIcon />
      </div>
    </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-5">Welcome to Community Aerosports</h1>
        <p className="text-lg mt-4 ml-2 mr-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <CountUpComponent />
        <TeamCard />
        <CarrouselTestimonials />
      </div>
    </>
  );
}

export default Home;
