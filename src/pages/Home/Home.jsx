import React from "react";
import { Adaptativa } from './Home.style';
import Personal from "../Personal/Personal";
import About from '../About/About';
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Idioms from "../../components/Idioms/Idioms";

export default function Home() {
  return (
    <>
      <Idioms />
      <Adaptativa>
        <Personal />
        <About />
        <Education />
        <Experience />
      </Adaptativa>
    </>
  );
}
