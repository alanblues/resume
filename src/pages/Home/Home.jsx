import React from "react";
import {Adaptativa} from './Home.style';
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Personal from "../Personal/Personal";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <Adaptativa>
      <Personal />
      <Education />
      <Experience />
      <Skills />
    </Adaptativa>
  );
}
