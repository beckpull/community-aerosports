// "use client";
import { CountUp } from "countup.js";
import { useEffect } from "react";
import "animate.css";

export default function CountUpComponent() {
  useEffect(() => {
    new CountUp("targetId", 17, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });

    new CountUp("targetId2", 3401, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });

    new CountUp("targetId3", 234, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });
    // if (!countUp.error) {
    //   countUp.start();
    // } else {
    //   console.error(countUp.error);
    // }
  }, []);

  return (
    <div className="bg-darkBlue p-3">
      <div className="banner mt-5">
        <p className="banner-text1 text-white">Experience</p>
        <p className="banner-text2 animate__animated animate__zoomInDown animate__delay-2s text-white mt-5">
          CountUp.js 🔼
        </p>
      </div>
      <div className="count-down">
        <p className="text-white m-4">We have great achievement to show</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div id="targetId" className="text-white"></div>
            <p className="text-white">yrs of experience</p>
          </div>
          <div>
            <div id="targetId2" className="text-white"></div>
            <p className="text-white">successful projects</p>
          </div>
          <div>
            <div id="targetId3" className="text-white"></div>
            <p className="text-white">clients</p>
          </div>
        </div>
      </div>
      {/* <p className=" pt-[10rem]"></p> */}
    </div>
  );
}