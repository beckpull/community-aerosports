// import Image from '../assets/images/cover.png';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import WhatsAppIcon from '@/components/icons/whatsappIcon';
import CountUpComponent from "@/components/countUp/countUp.jsx";
import TeamCard from "@/components/teamCard/teamCard.jsx";
import CarrouselTestimonials from "@/components/testimonials/carrouselTestimonials.jsx";
import LocationMap from "@/components/mapHomePage/map.jsx";


function Home() {
  return (
    <>
    <div style={{ position: 'relative' }}>
      {/* <img src={Image} alt="banner-plane" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} /> */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column' }}>
        {/* <WhatsAppIcon />
        <FacebookIcon />
        <InstagramButtonIcon /> */}
        {/* <LinkedinButtonIcon /> */}
      </div>
    </div>
      <div className="text-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-lg font-bold mt-5 ml-1 mr-1">Ready to Take to the Skies? Discover the Thrill of Flying with Community Aerosports!</h1>
        <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4">Welcome to Community Aerosports, where your dreams of flight become reality. Whether you’ve always wanted to pilot an aircraft or are looking to refine your aviation skills, our experienced team is here to guide you every step of the way.</p>
        <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4">Located in the heart of Farmington, NM, Community Aerosports is led by Russell Gervase, a seasoned pilot with 27 years of diverse aviation experience. Russell has flown a wide variety of planes and held numerous aviation roles, bringing a wealth of knowledge and expertise to our flight school. Alongside Russell is Emily, a dynamic and skilled co-instructor whose passion for aviation is matched only by her dedication to student success.
        </p>
        <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4">Join us at Community Aerosports and embark on an unforgettable journey into the world of aviation. With our expert instruction and comprehensive training programs, you’ll gain the confidence and competence to soar high and explore new horizons.
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
