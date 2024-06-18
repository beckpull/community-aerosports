import * as React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    testimonial: "This product changed my life for the better!",
    name: "John Doe",
    role: "Software Engineer"
  },
  {
    testimonial: "Excellent service and amazing results!",
    name: "Jane Smith",
    role: "Product Manager"
  },
  {
    testimonial: "I couldn't be happier with the experience.",
    name: "Alice Johnson",
    role: "UX Designer"
  },
  {
    testimonial: "Highly recommend to anyone looking for quality.",
    name: "Bob Brown",
    role: "Marketing Specialist"
  },
  {
    testimonial: "A game-changer in the industry.",
    name: "Emily Davis",
    role: "CEO"
  }
]

export default function CarrouselTestimonials() {
  return (
    <div className="max-w-2xl mx-auto">
      <Carousel className="relative">
        <CarouselContent className="flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="flex items-center justify-center p-4">
              <Card className="w-full text-center">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <p className="text-base mb-4">"{testimonial.testimonial}"</p>
                  <CardDescription className="text-center">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10 block md:hidden" />
        <CarouselPrevious className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10 md:hidden" />
        <CarouselNext className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block" />
        <CarouselPrevious className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block" />
      </Carousel>
    </div>
  )
}
