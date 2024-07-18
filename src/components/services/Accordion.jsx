import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionComp = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>§ 61.102 Applicability</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        This subpart prescribes the requirements for the issuance of private pilot certificates and ratings,
        the conditions under which those certificates and ratings are necessary, and the general operating
        rules for persons who hold those certificates and ratings.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>§ 61.103 Eligibility Requirements: Gral</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        To be eligible for a private pilot certificate, a person must:
        <ul className='pl-1.5 my-2.5'>
          <li><strong>(a)</strong> Be at least 17 years of age for a rating in other than a glider or balloon.</li>
          <li><strong>(b)</strong> Be at least 16 years of age for a rating in a glider or balloon.</li>
          <li><strong>(c)</strong> Be able to read, speak, write, and understand the English language. If the applicant is unable to meet one of these requirements due to medical reasons, then the Administrator may place such operating limitations on that applicant's pilot certificate as are necessary for the safe operation of the aircraft.</li>
          <li><strong>(d)</strong> Receive a logbook endorsement from an authorized instructor who:
            <ul className='my-2.5 pl-5'>
              <li>(1) Conducted the training or reviewed the person's home study on the aeronautical knowledge areas listed in § 61.105(b) of this part that apply to the aircraft rating sought; and</li>
              <li>(2) Certified that the person is prepared for the required knowledge test.</li>
            </ul>
          </li>
          <li><strong>(e)</strong> Pass the required knowledge test on the aeronautical knowledge areas listed in § 61.105(b) of this part.</li>
          <li><strong>(f)</strong> Receive flight training and a logbook endorsement from an authorized instructor who:
            <ul className='my-2.5 pl-5'>
              <li>(1) Conducted the training in the areas of operation listed in § 61.107(b) of this part that apply to the aircraft rating sought; and</li>
              <li>(2) Certified that the person is prepared for the required practical test.</li>
            </ul>
          </li>
          <li><strong>(g)</strong> Meet the aeronautical experience requirements of this part that apply to the aircraft rating sought before applying for the practical test.</li>
          <li><strong>(h)</strong> Pass a practical test on the areas of operation listed in § 61.107(b) of this part that apply to the aircraft rating sought.</li>
          <li><strong>(i)</strong> Comply with the appropriate sections of this part that apply to the aircraft category and class rating sought.</li>
          <li><strong>(j)</strong> Hold a U.S. student pilot certificate, sport pilot certificate, or recreational pilot certificate.</li>
        </ul>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>[Doc. No. 25910, 62 FR 16298, Apr. 4, 1997, as amended by Amdt. 61-124, 74 FR 42558, Aug. 21, 2009]</p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>§ 61.105 Aeronautical Knowledge</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        A person who is applying for a private pilot certificate must receive and log ground training from an authorized instructor or complete a home-study course on the aeronautical knowledge areas of paragraph (b) of this section that apply to the aircraft category and class rating sought.
        <p className='my-2.5 sm:text-sm md:text-base'>Aeronautical knowledge areas:</p>
        <ul className='pl-1.5 my-2.5'>
          <li><strong>(1)</strong> Applicable Federal Aviation Regulations of this chapter that relate to private pilot privileges, limitations, and flight operations;</li>
          <li><strong>(2)</strong> Accident reporting requirements of the National Transportation Safety Board;</li>
          <li><strong>(3)</strong> Use of the applicable portions of the “Aeronautical Information Manual” and FAA advisory circulars;</li>
          <li><strong>(4)</strong> Use of aeronautical charts for VFR navigation using pilotage, dead reckoning, and navigation systems;</li>
          <li><strong>(5)</strong> Radio communication procedures;</li>
          <li><strong>(6)</strong> Recognition of critical weather situations from the ground and in flight, windshear avoidance, and the procurement and use of aeronautical weather reports and forecasts;</li>
          <li><strong>(7)</strong> Safe and efficient operation of aircraft, including collision avoidance, and recognition and avoidance of wake turbulence;</li>
          <li><strong>(8)</strong> Effects of density altitude on takeoff and climb performance;</li>
          <li><strong>(9)</strong> Weight and balance computations;</li>
          <li><strong>(10)</strong> Principles of aerodynamics, powerplants, and aircraft systems;</li>
          <li><strong>(11)</strong> Stall awareness, spin entry, spins, and spin recovery techniques for the airplane and glider category ratings;</li>
          <li><strong>(12)</strong> Aeronautical decision making and judgment; and</li>
          <li><strong>(13)</strong> Preflight action that includes—
            <ul className='pl-1.5 my-2.5'>
              <li><strong>(i)</strong> How to obtain information on runway lengths at airports of intended use, data on takeoff and landing distances, weather reports and forecasts, and fuel requirements; and</li>
              <li><strong>(ii)</strong> How to plan for alternatives if the planned flight cannot be completed or delays are encountered.</li>
            </ul>
          </li>
        </ul>
        <p className='my-2.5 text-xs md:text-sm text-gray-500 tracking-tighter'>[Doc. No. 25910, 62 FR 16298, Apr. 4, 1997; Amdt. 61-103, 62 FR 40902, July 30, 1997]</p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>§ 61.107 Flight Proficiency</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        A person who applies for a private pilot certificate must receive and log ground and flight training from an authorized instructor on the areas of operation of this section that apply to the aircraft category and class rating sought.
        <p className='my-2.5 sm:text-sm md:text-base'>Areas of operation:</p>
        <ul className='pl-1.5 my-2.5'>
          <li><strong>(1)</strong> For an airplane category rating with a single-engine class rating:
            <ul className='pl-1.5 my-2.5'>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Preflight preparation;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Preflight procedures;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Airport and seaplane base operations;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Takeoffs, landings, and go-arounds;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Performance maneuvers;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Ground reference maneuvers;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Navigation;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Slow flight and stalls;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Basic instrument maneuvers;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Emergency operations;</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Night operations, except as provided in § 61.110 of this part; and</li>
              <li className='text-Stone400 md:text-sm lg:text-sm text-xs'>● Postflight procedures.</li>
            </ul>
          </li>
        </ul>

      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger className='md:text-base lg:text-base text-sm tracking-wide'>§ 61.109 Aeronautical Experience</AccordionTrigger>
      <AccordionContent className='my-2.5 sm:text-sm md:text-base'>
        For an airplane single-engine rating. Except as provided in paragraph (k) of this section, a person who applies for a private pilot certificate with an airplane category and single-engine class rating must log at least 40 hours of flight time that includes at least 20 hours of flight training from an authorized instructor and 10 hours of solo flight training in the areas of operation listed in § 61.107(b)(1) of this part, and the training must include at least:
        <ul className='pl-1.5 my-2.5'>
          <li><strong>(1)</strong> 3 hours of cross-country flight training in a single-engine airplane;</li>
          <li><strong>(2)</strong> Except as provided in § 61.110 of this part, 3 hours of night flight training in a single-engine airplane that includes—
            <ul className='my-2.5 pl-5'>
              <li>(i) One cross-country flight of over 100 nautical miles total distance; and</li>
              <li>(ii) 10 takeoffs and 10 landings to a full stop (with each landing involving a flight in the traffic pattern) at an airport.</li>
            </ul>
          </li>
          <li><strong>(3)</strong> 3 hours of flight training in a single-engine airplane on the control and maneuvering of an airplane solely by reference to instruments, including straight and level flight, constant airspeed climbs and descents, turns to a heading, recovery from unusual flight attitudes, radio communications, and the use of navigation systems/facilities and radar services appropriate to instrument flight;</li>
          <li><strong>(4)</strong> 3 hours of flight training with an authorized instructor in a single-engine airplane in preparation for the practical test, which must have been performed within the preceding 2 calendar months from the month of the test; and</li>
          <li><strong>(5)</strong> 10 hours of solo flight time in a single-engine airplane, consisting of at least—
            <ul className='my-2.5 pl-5'>
              <li>(i) 5 hours of solo cross-country time;</li>
              <li>(ii) One solo cross country flight of 150 nautical miles total distance, with full-stop landings at three points, and one segment of the flight consisting of a straight-line distance of more than 50 nautical miles between the takeoff and landing locations; and</li>
              <li>(iii) Three takeoffs and three landings to a full stop (with each landing involving a flight in the traffic pattern) at an airport with an operating control tower.</li>
            </ul>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>

  </Accordion>
);


const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#333',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  paragraph: {
    // margin: '10px 0',
  },
  list: {
    // margin: '10px 0',
    // paddingLeft: '20px',
  },
  nestedList: {
    margin: '10px 0',
    paddingLeft: '20px',
  },
  citation: {
    fontSize: '0.9em',
    color: '#666',
    marginTop: '10px',
  },
};
export default AccordionComp;

