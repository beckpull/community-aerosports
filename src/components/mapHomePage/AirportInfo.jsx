import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AirportInfo = () => {
  <Accordion type='single' collapsible >
    <AccordionItem value="item-1">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Location</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 1
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Operations</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 2
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Communications</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 3
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Nearby Radio Navigation Aids</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 4
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Services</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 2
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 7/25</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 2
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 5/23</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        Content 2
      </AccordionContent>
    </AccordionItem>
  </Accordion>
}

export default AirportInfo;