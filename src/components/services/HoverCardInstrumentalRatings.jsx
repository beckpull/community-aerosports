import React from 'react';

const HoverCardInstrumentRating = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg relative max-w-4xl mx-4 max-h-[80vh] overflow-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="relative h-full overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Instrument Rating Requirements</h2>
          <div style={styles.container}>
            <h1 style={styles.title}>FAA Regulations - § 61.65 Instrument Rating Requirements</h1>

            <section style={styles.section}>
              <h2 style={styles.subtitle}>(a) General</h2>
              <p style={styles.paragraph}>A person who applies for an instrument rating must:</p>
              <ul style={styles.list}>
                <li>Hold at least a current private pilot certificate, or be concurrently applying for a private pilot certificate, with an airplane, helicopter, or powered-lift rating appropriate to the instrument rating sought;</li>
                <li>Be able to read, speak, write, and understand the English language. If the applicant is unable to meet any of these requirements due to a medical condition, the Administrator may place such operating limitations on the applicant's pilot certificate as are necessary for the safe operation of the aircraft;</li>
                <li>Receive and log ground training from an authorized instructor or accomplish a home-study course of training on the aeronautical knowledge areas of paragraph (b) of this section that apply to the instrument rating sought;</li>
                <li>Receive a logbook or training record endorsement from an authorized instructor certifying that the person is prepared to take the required knowledge test;</li>
                <li>Receive and log training on the areas of operation of paragraph (c) of this section from an authorized instructor in an aircraft, full flight simulator, or flight training device that represents an airplane, helicopter, or powered-lift appropriate to the instrument rating sought;</li>
                <li>Receive a logbook or training record endorsement from an authorized instructor certifying that the person is prepared to take the required practical test;</li>
                <li>Pass the required knowledge test on the aeronautical knowledge areas of paragraph (b) of this section; however, an applicant is not required to take another knowledge test when that person already holds an instrument rating;</li>
                <li>Pass the required practical test on the areas of operation in paragraph (c) of this section in—
                  <ul style={styles.list}>
                    <li>An airplane, helicopter, or powered-lift appropriate to the rating sought; or</li>
                    <li>A full flight simulator or a flight training device appropriate to the rating sought and for the specific maneuver or instrument approach procedure performed. If an approved flight training device is used for the practical test, the instrument approach procedures conducted in that flight training device are limited to one precision and one nonprecision approach, provided the flight training device is approved for the procedure performed.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.subtitle}>(b) Aeronautical Knowledge</h2>
              <p style={styles.paragraph}>A person who applies for an instrument rating must have received and logged ground training from an authorized instructor or accomplished a home-study course on the following aeronautical knowledge areas that apply to the instrument rating sought:</p>
              <ul style={styles.list}>
                <li>Federal Aviation Regulations of this chapter that apply to flight operations under IFR;</li>
                <li>Appropriate information that applies to flight operations under IFR in the “Aeronautical Information Manual;”</li>
                <li>Air traffic control system and procedures for instrument flight operations;</li>
                <li>IFR navigation and approaches by use of navigation systems;</li>
                <li>Use of IFR en route and instrument approach procedure charts;</li>
                <li>Procurement and use of aviation weather reports and forecasts and the elements of forecasting weather trends based on that information and personal observation of weather conditions;</li>
                <li>Safe and efficient operation of aircraft under instrument flight rules and conditions;</li>
                <li>Recognition of critical weather situations and windshear avoidance;</li>
                <li>Aeronautical decision making and judgment; and</li>
                <li>Crew resource management, including crew communication and coordination.</li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.subtitle}>(c) Flight Proficiency</h2>
              <p style={styles.paragraph}>A person who applies for an instrument rating must receive and log training from an authorized instructor in an aircraft, or in a full flight simulator or flight training device, in accordance with paragraph (g) of this section, that includes the following areas of operation:</p>
              <ul style={styles.list}>
                <li>Preflight preparation;</li>
                <li>Preflight procedures;</li>
                <li>Air traffic control clearances and procedures;</li>
                <li>Flight by reference to instruments;</li>
                <li>Navigation systems;</li>
                <li>Instrument approach procedures;</li>
                <li>Emergency operations; and</li>
                <li>Postflight procedures.</li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.subtitle}>(d) Aeronautical Experience for the Instrument-Airplane Rating</h2>
              <p style={styles.paragraph}>A person who applies for an instrument-airplane rating must have logged:</p>
              <ul style={styles.list}>
                <li>Except as provided in paragraph (g) of this section, 50 hours of cross-country flight time as pilot in command, of which 10 hours must have been in an airplane; and</li>
                <li>Forty hours of actual or simulated instrument time in the areas of operation listed in paragraph (c) of this section, of which 15 hours must have been received from an authorized instructor who holds an instrument-airplane rating, and the instrument time includes:
                  <ul style={styles.nestedList}>
                    <li>Three hours of instrument flight training from an authorized instructor in an airplane that is appropriate to the instrument-airplane rating within 2 calendar months before the date of the practical test; and</li>
                    <li>Instrument flight training on cross country flight procedures, including one cross country flight in an airplane with an authorized instructor, that is performed under instrument flight rules, when a flight plan has been filed with an air traffic control facility, and that involves—
                      <ul style={styles.nestedList}>
                        <li>A flight of 250 nautical miles along airways or by directed routing from an air traffic control facility;</li>
                        <li>An instrument approach at each airport; and</li>
                        <li>Three different kinds of approaches with the use of navigation systems.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.subtitle}>(h) Use of full Flight Simulators or flight training devices</h2>
              <p style={styles.paragraph}>If the instrument time was provided by an authorized instructor in a full flight simulator or flight training device—</p>
              <ul style={styles.list}>
                <li>(1) A maximum of 30 hours may be performed in that full flight simulator or flight training device if the instrument time was completed in accordance with part 142 of this chapter; or
                </li>
                <li>(2) A maximum of 20 hours may be performed in that full flight simulator or flight training device if the instrument time was not completed in accordance with part 142 of this chapter.
                </li>
              </ul>
            </section>
            <p style={styles.citation}>[Doc. No. 25910, 62 FR 16298, Apr. 4, 1997; Amdt. 61-103, 62 FR 40900, July 30, 1997; Amdt. 61-124, 74 FR 42554, Aug. 21, 2009; Amdt. 61-127, 76 FR 19267, Apr. 7, 2011; Amdt. 61-128, 76 FR 54106, Aug. 31, 2011; Docket FAA-2015-1846, Amdt. 61-136, 81 FR 21460, Apr. 12, 2016]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

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
    margin: '10px 0',
  },
  list: {
    margin: '10px 0',
    paddingLeft: '20px',
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
}

export default HoverCardInstrumentRating;