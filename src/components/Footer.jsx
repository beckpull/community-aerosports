import React from 'react';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import WhatsAppIcon from './icons/whatsappIcon';

function Footer() {
  return (
    <footer className="bottom-0 w-full flex flex-col items-center justify-center p-3 bg-customBlack">
      <div className="flex gap-4 mt-3">
        <WhatsAppIcon />
        <InstagramButtonIcon />
        <FacebookIcon />
        <LinkedinButtonIcon />
      </div>
      <p className="mt-3 text-center text-gray-200 text-sm opacity-50">made with love, bp</p>
    </footer>
  );
}

export default Footer;
