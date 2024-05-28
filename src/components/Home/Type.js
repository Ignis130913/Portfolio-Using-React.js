import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI-ML ENGINEER",
          "DATA SCIENTIST",
          "PROBLEM SOLVER",
          "MERN STACK DEVELOPER",
          "ENTREPRENEUR",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
