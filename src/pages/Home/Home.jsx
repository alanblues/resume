import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Personal from "../Personal/Personal";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <div className="adaptative">
      <Personal />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}
