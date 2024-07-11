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
    <div className="flex flex-col sm:flex-row">
      <Card className="sm:w-1/2 ml-3 mt-3 mr-3 ">
        <CardHeader className="pt-20 flex flex-col items-center rounded-t-lg" style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #ffffff 50%), url(${profile})`,
          backgroundSize: 'cover', // Esto asegura que la imagen cubra completamente el espacio disponible sin distorsionarse
          backgroundPosition: 'center'
          }}>
          <div className="w-48 h-48 rounded-full overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5 border-4 border-white">
            <img src={imagePilot1} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <CardTitle className="font-semibold">Russell Gervase</CardTitle>
          <CardDescription>ATP, CFII</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-customGray">
            <FaLinkedinIn />
          </Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </CardContent>
      </Card>

      <Card className="sm:w-1/2 ml-3 mt-3 mr-3 ">
        <CardHeader className="pt-20 flex flex-col items-center rounded-t-lg" style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #ffffff 50%), url(${profile})`,
          backgroundSize: 'cover', // Esto asegura que la imagen cubra completamente el espacio disponible sin distorsionarse
          backgroundPosition: 'center'
          }}>
          <div className="w-48 h-48 rounded-full overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5 border-4 border-white">
            <img src={imagePilot1} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <CardTitle className="font-semibold">Emily</CardTitle>
          <CardDescription>CFI</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-customGray">
            <FaLinkedinIn />
          </Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </CardContent>
      </Card>
    </div>


  )
}
