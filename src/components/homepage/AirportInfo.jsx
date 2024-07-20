import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AirportInfo = () => (
  <Accordion type='single' collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Location</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <ul className='list-disc pl-5'>
          <li><strong>FAA Identifier</strong>: FMN</li>
          <li><strong>Latitude/Longitude</strong> <i>(estimated)</i>:</li>
          <ul className='list-disc pl-5'>
            <li>36-44-28.5040N 108-13-47.7900W</li>
            <li>36-44.475067N 108-13.796500W</li>
            <li>36.7412511,-108.2299417</li>
          </ul>
          <li><strong>Elevation</strong>: 5506.6 ft. / 1678.4 m (surveyed)</li>
          <li><strong>Variation</strong>: 12E (1985)</li>
          <li><strong>From city</strong>: 1 mile NW of FARMINGTON, NM</li>
          <li><strong>Time zone</strong>: UTC -6 (UTC -7 during Standard Time)</li>
          <li><strong>Zip code</strong>: 87401</li>
        </ul>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Operations</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <ul className='list-disc pl-5'>
          <li><strong>Airport use</strong>: Open to the public</li>
          <li><strong>Control tower</strong>: yes</li>
          <li><strong>ARTCC</strong>: DENVER CENTER</li>
          <li><strong>FSS</strong>: ALBUQUERQUE FLIGHT SERVICE STATION</li>
          <li><strong>NOTAMs facility</strong>: FMN (NOTAM-D service available)</li>
          <li><strong>Attendance</strong>: 0600-2200</li>
          <li><strong>Wind indicator</strong>: lighted</li>
          <li><strong>Segmented circle</strong>: yes</li>
          <li><strong>Lights</strong>: WHEN ATCT CLSD ACTVT REIL RWY 23 & 25; PAPI RWY 05 & 23; VASI RWY 07 & 25; MIRL RWY 05/23 & 07/25 - CTAF. REIL RWY 25 & MIRL RWY 07/25 PRESET LOW INTST.</li>
          <li><strong>Beacon</strong>:</li>
          <ul className='list-disc pl-5'>
            <li>white-green (lighted land airport)</li>
            <li>Operates sunset to sunrise.</li>
          </ul>
          <li><strong>Fire and rescue</strong>: ARFF index A</li>
        </ul>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Communications</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <ul className='list-disc pl-5'>
          <li><strong>CTAF</strong>: 118.9</li>
          <li><strong>UNICOM</strong>: 122.95</li>
          <li><strong>ATIS</strong>: 127.15</li>
          <li><strong>WX ASOS</strong>: 127.15 (505-325-9268)</li>
          <li><strong>FARMINGTON GROUND</strong>: 121.7 [0600-2200]</li>
          <li><strong>FARMINGTON TOWER</strong>: 118.9 257.8 [0600-2200]</li>
          <li><strong>EMERG</strong>: 121.5 243.0</li>
        </ul>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>* APCH/DEP CTL SVC PRVDD BY DENVER ARTCC (ZDV) ON FREQS 118.575/348.7 (FARMINGTON RCAG).</p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Nearby Radio Navigation Aids</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-center">VOR radial/distance</th>
                <th className="px-4 py-2 text-center">VOR name</th>
                <th className="px-4 py-2 text-center">Frequency</th>
                <th className="px-4 py-2 text-center">Variation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 text-center">RSKr252/6.3</td>
                <td className="px-4 py-2 text-center">RATTLESNAKE VORTAC</td>
                <td className="px-4 py-2 text-center">115.30</td>
                <td className="px-4 py-2 text-center">14E</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 text-center">DROr209/33.8</td>
                <td className="px-4 py-2 text-center">DURANGO VOR/DME</td>
                <td className="px-4 py-2 text-center">116.55</td>
                <td className="px-4 py-2 text-center">14E</td>
              </tr>
            </tbody>
          </table>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Services</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <ul className='list-disc pl-5'>
          <li><strong>Fuel available</strong>: 100LL JET-A JET-A1+</li>
          <li><strong>Parking</strong>: hangars and tiedowns</li>
          <li><strong>Airframe service</strong>: MAJOR</li>
          <li><strong>Powerplant service</strong>: MAJOR</li>
          <li><strong>Bottled oxygen</strong>: LOW</li>
          <li><strong>Bulk oxygen</strong>: LOW</li>
        </ul>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 7/25</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Dimensions</strong>: 		6704 x 100 ft. / 2043 x 30 m</li>
        <li><strong>Surface</strong>: 		asphalt/porous friction courses, in good condition</li>
        <li><strong>Weight bearing capacity</strong>:
          <ul>
            <li>PCN 29 /F/C/X/T</li>
            <li>Single wheel: 	50.0</li>
            <li>Double wheel: 	90.0</li>
          </ul>
        </li>
        <li className='pb-8'><strong>Runway edge lights</strong>: 	medium intensity</li>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="bg-gray-200 border-b">
                <th className="px-4 py-2 text-center border-b"></th>
                <th className="px-4 py-2 text-center border-b">Runway 7</th>
                <th className="px-4 py-2 text-center border-b">Runway 25</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Latitude:</th>
                <td className="px-4 py-2 text-center">36-44.465593N</td>
                <td className="px-4 py-2 text-center">36-44.498110N</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Longitude:</th>
                <td className="px-4 py-2 text-center">108-14.395637W</td>
                <td className="px-4 py-2 text-center">108-13.023943W</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Elevation:</th>
                <td className="px-4 py-2 text-center">5476.9 ft.</td>
                <td className="px-4 py-2 text-center">5502.8 ft.</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Traffic pattern:</th>
                <td className="px-4 py-2 text-center">left</td>
                <td className="px-4 py-2 text-center">left</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Runway heading:</th>
                <td className="px-4 py-2 text-center">076 magnetic, 088 true</td>
                <td className="px-4 py-2 text-center">256 magnetic, 268 true</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Displaced threshold:</th>
                <td className="px-4 py-2 text-center">239 ft.</td>
                <td className="px-4 py-2 text-center">217 ft.</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Declared distances:</th>
                <td className="px-4 py-2 text-center">TORA:6704 TODA:6704 ASDA:6487 LDA:6248</td>
                <td className="px-4 py-2 text-center">TORA:6704 TODA:6704 ASDA:6465 LDA:6248</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Markings:</th>
                <td className="px-4 py-2 text-center">precision, in good condition</td>
                <td className="px-4 py-2 text-center">precision, in good condition</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Visual slope indicator:</th>
                <td className="px-4 py-2 text-center">4-box VASI on left (3.00 degrees glide path)</td>
                <td className="px-4 py-2 text-center">4-box VASI on left (3.00 degrees glide path)</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Runway end identifier lights:</th>
                <td className="px-4 py-2 text-center"></td>
                <td className="px-4 py-2 text-center">yes</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Touchdown point:</th>
                <td className="px-4 py-2 text-center">yes, no lights</td>
                <td className="px-4 py-2 text-center">yes, no lights</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Instrument approach:</th>
                <td className="px-4 py-2 text-center"></td>
                <td className="px-4 py-2 text-center">ILS/DME</td>
              </tr>
            </tbody>
          </table>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Runway 5/23</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Dimensions</strong>: 		6501 x 150 ft. / 1982 x 46 m</li>
        <li><strong>Surface</strong>: 		asphalt/grooved, in excellent condition</li>
        <li><strong>Weight bearing capacity</strong>:
          <ul>
            <li>PCN 29 /F/C/X/T</li>
            <li>Single wheel: 	47.0</li>
            <li>Double wheel: 	66.0</li>
          </ul>
        </li>
        <li className='pb-6'><strong>Runway edge lights</strong>: 	medium intensity</li>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="bg-gray-200 border-b">
                <th className="px-4 py-2 text-center border-b"></th>
                <th className="px-4 py-2 text-center border-b">Runway 5</th>
                <th className="px-4 py-2 text-center border-b">Runway 23</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Latitude:</th>
                <td className="px-4 py-2 text-center">36-44.238783N</td>
                <td className="px-4 py-2 text-center">36-44.697203N</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Longitude:</th>
                <td className="px-4 py-2 text-center">108-14.487268W</td>
                <td className="px-4 py-2 text-center">108-13.284470W</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Elevation:</th>
                <td className="px-4 py-2 text-center">5471.6 ft.</td>
                <td className="px-4 py-2 text-center">5503.7 ft.</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Traffic pattern:</th>
                <td className="px-4 py-2 text-center">left</td>
                <td className="px-4 py-2 text-center">left</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Runway heading:</th>
                <td className="px-4 py-2 text-center">053 magnetic, 065 true</td>
                <td className="px-4 py-2 text-center">233 magnetic, 245 true</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Displaced threshold:</th>
                <td className="px-4 py-2 text-center">no</td>
                <td className="px-4 py-2 text-center">511 ft.</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Declared distances:</th>
                <td className="px-4 py-2 text-center">TORA:6501 TODA:6501 ASDA:5590 LDA:5590</td>
                <td className="px-4 py-2 text-center">TORA:6501 TODA:6501 ASDA:6101 LDA:5590</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Markings:</th>
                <td className="px-4 py-2 text-center">nonprecision, in good condition</td>
                <td className="px-4 py-2 text-center">nonprecision, in good condition</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Visual slope indicator:</th>
                <td className="px-4 py-2 text-center">4-light PAPI on left (3.00 degrees glide path)</td>
                <td className="px-4 py-2 text-center">4-light PAPI on right (3.00 degrees glide path)</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Runway end identifier lights:</th>
                <td className="px-4 py-2 text-center"></td>
                <td className="px-4 py-2 text-center">yes</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-4 py-2 bg-gray-200 border-b">Touchdown point:</th>
                <td className="px-4 py-2 text-center">yes, no lights</td>
                <td className="px-4 py-2 text-center">yes, no lights</td>
              </tr>
            </tbody>
          </table>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Ownership and Management from official FAA records</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <ul>
          <li className='pb-4'><strong>Ownership</strong>: 	Publicly-owned</li>
          <li><strong>Owner</strong>: 	City of Farmington
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6 pb-2'>Phone: 505-599-1100</p>
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6'>800 MUNICIPAL DRIVE</p>
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6'>FARMINGTON, NM 87401</p>
          </li>
          <li><strong>Manager</strong>: 	Michael Lewis
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6 pb-2'>Phone: 505-599-1394</p>
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6'>800 MUNICIPAL DRIVE </p>
            <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter pl-6'>FARMINGTON, NM 87401</p>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>Airport Operational Statistics</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        <li><strong>Aircraft based on the field</strong>: 	111</li>
        <li><strong>Single engine airplanes</strong>: 	90</li>
        <li><strong>Multi engine airplanes</strong>: 	12</li>
        <li><strong>Jet airplanes</strong>: 	1</li>
        <li><strong>Helicopters</strong>: 	4</li>
        <li><strong>Gliders airplanes</strong>: 	1</li>
        <li className='pb-6'><strong>Ultralights</strong>: 	3</li>
        <li className='pb-2'><strong>Aircraft operations</strong>: 	avg 126/day *</li>
        <ul className='pl-4'>
          <li>- <i><strong>56%</strong> 	local general aviation</i></li>
          <li>- <i><strong>29%</strong> 	transient general aviation</i></li>
          <li>- <i><strong>13%</strong> 	air taxi</i></li>
          <li>- <i><strong>3%</strong> 	military</i></li>
        </ul>
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
);

export default AirportInfo;