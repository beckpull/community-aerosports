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

export default function TeamCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">

      <Card className="sm:w-1/2 ml-3 mt-3 mr-3">
        <CardHeader>
          <img src={imagePilot1} alt="Profile" className="w-full h-auto rounded-custom rounded-b-none hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5" />
          <CardTitle>Name</CardTitle>
          <CardDescription>This is their role.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-customGray">
            <FaLinkedinIn />
          </Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </CardContent>
      </Card>

      <Card className="sm:w-1/2 ml-3 mt-3 mr-3">
        <CardHeader>
          <img src={imagePilot1} alt="Profile" className="w-full h-auto rounded-custom rounded-b-none hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5" />
          <CardTitle>Name</CardTitle>
          <CardDescription>This is their role.</CardDescription>
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
