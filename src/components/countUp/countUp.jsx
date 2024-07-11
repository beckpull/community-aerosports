import '../../styles/CountUp.css';
import Icon1 from '../../assets/homepage/icon1.png';
import Icon2 from '../../assets/homepage/icon2.png';
import Icon3 from '../../assets/homepage/icon3.png';
import Icon4 from '../../assets/homepage/icon4.png';
import { CountUp } from "countup.js";
import { useEffect } from "react";
import "animate.css";

export default function CountUpComponent() {
  useEffect(() => {
    const options = {
      enableScrollSpy: true,
      scrollSpyOnce: true,
      duration: 3,
    };

    const countUpInstances = [
      new CountUp("targetId", 27, options),
      new CountUp("targetId2", 3401, options),
      new CountUp("targetId3", 234, options),
      new CountUp("targetId4", 320, options),
    ];

    countUpInstances.forEach(countUp => {
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }, []);

  return (
    <div className="bg-white p-3 ml-3 mr-3">
      <div className="banner mt-5">
        <p className="text-lg banner-text2 animate__animated animate__zoomInDown animate__delay-1s text-black font-semibold">
          Trusted by General Aviation ✈️
        </p>
      </div>
      <div className="count-down mb-5 mt-5 rounded border-customWhite border-2 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {/* Years of Experience */}
          <div className="bg-customWhite rounded-circle rounded-full custom-size flex flex-col items-center mb-2 mt-2">
            <img src={Icon1} alt="Icon Description" className="mt-5" style={{ height: '80px', width: '80px' }} />
            <div className="flex items-center">
              <div id="targetId" className="text-black font-bold text-2xl"></div>
              <span className="text-black font-bold text-2xl">+</span>
            </div>
            <p className="text-neutral mt-1 ">Years Of Experience</p>
          </div>

          {/* Clients */}
          <div className="bg-customWhite rounded-circle rounded-full custom-size flex flex-col items-center mb-2 mt-2">
            <img src={Icon2} alt="Icon Description" className="mt-5" style={{ height: '80px', width: '80px' }} />
            <div className="flex items-center">
              <div id="targetId2" className="text-black font-bold text-2xl"></div>
              <span className="text-black font-bold text-2xl">+</span>
            </div>
            <p className="text-neutral mt-1">Clients</p>
          </div>

          {/* Graduated Pilots */}
          <div className="bg-customWhite rounded-circle rounded-full custom-size flex flex-col items-center mb-2 mt-2">
            <img src={Icon3} alt="Icon Description" className="mt-5" style={{ height: '80px', width: '80px' }} />
            <div className="flex items-center">
              <div id="targetId3" className="text-black font-bold text-2xl"></div>
              <span className="text-black font-bold text-2xl">+</span>
            </div>
            <p className="text-neutral mt-1">Graduated Pilots</p>
          </div>

          {/* Total Flight Hours */}
          <div className="bg-customWhite rounded-circle rounded-full custom-size flex flex-col items-center mb-2 mt-2">
            <img src={Icon4} alt="Icon Description" className="mt-5" style={{ height: '90px', width: '90px' }} />
            <div className="flex items-center">
              <div id="targetId4" className="text-black font-bold text-2xl"></div>
              <span className="text-black font-bold text-2xl">+</span>
            </div>
            <p className="text-neutral mt-1">Total Flight Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
