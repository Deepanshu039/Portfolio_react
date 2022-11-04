import React from "react";
import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {

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

            <span>
              <Typewriter
                wrapperClassName="typewriter"
                cursorClassName="cursorTypewriter"
                options={{
                  strings: ["Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
