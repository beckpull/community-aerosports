import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import imagePilot1 from "@/assets/homepage/pilot1.jpg";
import profile from "@/assets/homepage/pilots.jpg";

export default function TeamCard() {
  return (
    <>
      <h3 className="lg:text-2xl md:text-xl sm:text-lg font-bold mt-5 ml-1 mr-1">Community Aerosports Flight School Instructors</h3>
      <p className="md:m-5 lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4">We are delighted to have a diverse and exceptionally talented team of flight instructors dedicated to your training.
        <br /><br />Whether you are beginning your flight journey or advancing to commercial training, our passionate
        instructors prioritize your individual needs and requirements.
        <br /><br />We are committed to guiding each student and pilot in a manner that makes aviation feel like second
        nature, ensuring safety and practicality every step of the way.</p>
      <div className="flex flex-col sm:flex-row">
        <Card className="sm:w-1/2 ml-3 mt-3 mr-3 ">
          <CardHeader className="pt-20 flex flex-col items-center rounded-t-lg" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #ffffff 50%), url(${profile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="w-44 h-44 rounded overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5 border-4 border-white">
              <img src={imagePilot1} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <CardTitle className="font-semibold">Russell Gervase</CardTitle>
            <CardDescription>ATP, CFII</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="https://www.linkedin.com/in/russ-gervase-9520ba12/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full mt-2 mb-2 bg-customWhite hover:bg-customGray">
                <FaLinkedinIn />
              </Button>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </CardContent>
        </Card>

        <Card className="sm:w-1/2 ml-3 mt-3 mr-3 ">
          <CardHeader className="pt-20 flex flex-col items-center rounded-t-lg" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #ffffff 50%), url(${profile})`,
            backgroundSize: 'cover', // Esto asegura que la imagen cubra completamente el espacio disponible sin distorsionarse
            backgroundPosition: 'center'
          }}>

            <div className="w-44 h-44 rounded overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5 border-4 border-white">
              <img src={imagePilot1} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <CardTitle className="font-semibold">Emily</CardTitle>
            <CardDescription>CFI</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="https://www.linkedin.com/in/russ-gervase-9520ba12/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full mt-2 mb-2 bg-customWhite hover:bg-customGray">
                <FaLinkedinIn />
              </Button>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </CardContent>
        </Card>
      </div>
    </>

  )
}
