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
        <ul>
          <li><strong>FAA Identifier</strong>:  FMN</li>
          <li><strong><i>(estimated)</i> Latitutde/Longitude</strong>:</li>
          <ul>
            <li>36-44-28.5040N 108-13-47.7900W</li>
            <li>36-44.475067N 108-13.796500W</li>
            <li>36.7412511,-108.2299417</li>
          </ul>
          <li><strong>Elevation</strong>: 	5506.6 ft. / 1678.4 m (surveyed)</li>
          <li><strong>Variation</strong>: 	12E (1985)</li>
          <li><strong>From city</strong>: 	1 mile NW of FARMINGTON, NM</li>
          <li><strong>Time zone</strong>:   UTC -6 (UTC -7 during Standard Time)</li>
          <li><strong>Zip code</strong>: 	87401</li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Operations</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Airport use</strong>: 	Open to the public</li>
        <li><strong>Control tower</strong>: 	yes</li>
        <li><strong>ARTCC</strong>: 	DENVER CENTER</li>
        <li><strong>FSS</strong>: 	ALBUQUERQUE FLIGHT SERVICE STATION</li>
        <li><strong>NOTAMs facility</strong>: 	FMN (NOTAM-D service available)</li>
        <li><strong>Attendance</strong>: 	0600-2200</li>
        <li><strong>Wind indicator</strong>: 	lighted</li>
        <li><strong>Segmented circle</strong>: 	yes</li>
        <li><strong>Lights</strong>: 	WHEN ATCT CLSD ACTVT REIL RWY 23 & 25; PAPI RWY 05 & 23; VASI RWY 07 & 25; MIRL RWY 05/23 & 07/25 - CTAF. REIL RWY 25 & MIRL RWY 07/25 PRESET LOW INTST.</li>
        <li><strong>Beacon</strong>:</li>
        <ul>
          <li>white-green (lighted land airport)</li>
          <li>Operates sunset to sunrise.</li>
        </ul>
        <li><strong>Fire and rescue</strong>: 	ARFF index A</li>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Communications</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>CTAF</strong>: 	118.9</li>
        <li><strong>UNICOM</strong>: 	122.95</li>
        <li><strong>ATIS</strong>: 	127.15</li>
        <li><strong>WX ASOS</strong>: 	127.15 (505-325-9268)</li>
        <li><strong>FARMINGTON GROUND</strong>: 	121.7 [0600-2200]</li>
        <li><strong>FARMINGTON TOWER</strong>: 		118.9 257.8 [0600-2200]</li>
        <li><strong>EMERG</strong>: 	121.5 243.0</li>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>* APCH/DEP CTL SVC PRVDD BY DENVER ARTCC (ZDV) ON FREQS 118.575/348.7 (FARMINGTON RCAG).</p>
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
        <li><strong>Fuel available</strong>: 	100LL JET-A JET-A1+</li>
        <li><strong>Parking</strong>: 	hangars and tiedowns</li>
        <li><strong>Airframe service</strong>: 	MAJOR</li>
        <li><strong>Powerplant service</strong>: 	MAJOR</li>
        <li><strong>Bottled oxygen</strong>: 	LOW</li>
        <li><strong>Bulk oxygen</strong>: 	LOW</li>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 7/25</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Zip code</strong>: 	87401</li>
        <li><strong>Zip code</strong>:
          <ul>
            <li>36-44-28.5040N 108-13-47.7900W</li>
            <li>36-44.475067N 108-13.796500W</li>
            <li>36.7412511,-108.2299417</li>
          </ul>
        </li>
        <li><strong>Zip code</strong>: 	87401</li>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 5/23</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Zip code</strong>: 	87401</li>
        <li><strong>Zip code</strong>:
          <ul>
            <li>36-44-28.5040N 108-13-47.7900W</li>
            <li>36-44.475067N 108-13.796500W</li>
            <li>36.7412511,-108.2299417</li>
          </ul>
        </li>
        <li><strong>Zip code</strong>: 	87401</li>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-8">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Ownership and Management from official FAA records</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Ownership</strong>: 	Publicly-owned</li>
        <li><strong>Owner</strong>: 	City of Farmington</li>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>Phone: 505-599-1100</p>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>800 MUNICIPAL DRIVE</p>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>FARMINGTON, NM 87401</p>
        <li><strong>Manager</strong>: 	Michael Lewis</li>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>Phone: 505-599-1394</p>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>800 MUNICIPAL DRIVE </p>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>FARMINGTON, NM 87401
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-9">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Operational Statistics</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Aircraft based on the field</strong>: 	87401</li>
        <li><strong>Single engine airplanes</strong>: 	87401</li>
        <li><strong>Multi engine airplanes</strong>: 	87401</li>
        <li><strong>Jet airplanes</strong>: 	87401</li>
        <li><strong>Helicopters</strong>: 	87401</li>
        <li><strong>Gliders airplanes</strong>: 	87401</li>
        <li><strong>Ultralights</strong>: 	87401</li>
        <li><strong>Aircraft operations</strong>: 	avg 126/day *</li>
        <li>56% 	local general aviation</li>
        <li>29% 	transient general aviation</li>
        <li>13% 	air taxi</li>
        <li>3% 	military</li>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>* for 12-month period ending 30 April 2022
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-10">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Additional Remarks</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li>FOR CD CTC FARMINGTON ATCT GROUND CONTROL 121.7, WHEN ATCT CLSD CTC DENVER ARTCC AT 303-651-4257</li>
        <li>ARPT SURFACE CONDITIONS ARE NOT MONITORED OUTSIDE OF ATTENDED HOURS.</li>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
}

export default AirportInfo;