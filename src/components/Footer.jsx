import React from 'react';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import WhatsAppIcon from './icons/whatsappIcon';

function Footer() {
  return (
    <footer className="bottom-0 w-full flex flex-col items-center justify-center p-3 bg-darkBlue">
      <div className="flex gap-4">
      <p className="mt-3 text-center text-customWhite font-bold text-sm opacity-50">© Community Aerosports. All rights reserved</p>
        {/* <WhatsAppIcon />
        <InstagramButtonIcon />
        <FacebookIcon />
        <LinkedinButtonIcon /> */}
      </div>
      <p className="text-center text-gray-800 font-bold text-sm opacity-50">made with love, bp</p>
    </footer>
  );
}

export default Footer;
