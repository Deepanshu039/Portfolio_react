import React, { useEffect } from "react";
import "./intro.scss";
import { init } from "ityped";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
  //   const textRef = useRef();

  //   useEffect(() => {
  //     init(textRef.current, {
  //       showCursor: true,
  //       backDelay: 1500,
  //       strings: ["Developer", "Designer", "Content Creator"],
  //     });
  //   }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Deepanshu Gautam</h1>
          <div className="text">
            <h3>{`Full-Stack `}</h3>

            <p>
              <Typewriter
                wrapperClassName="typewriter"
                cursorClassName="cursorTypewriter"
                options={{
                  strings: ["Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          {/* </h3> */}
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
