import React from "react";
import { Adaptativa } from './Home.style';
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Personal from "../Personal/Personal";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <Adaptativa>
      <Personal />
      <Education />
      <Experience />
      <Contact />
    </Adaptativa>
  );
}
