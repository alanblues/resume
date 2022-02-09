import React from "react";
import Section from "../../components/Section/Section";
import { Intereses } from "./Interests.style";

export default function Interests() {
  return (
    <>
      <Intereses>
        <Section text="Languages" />
        <span>Spanish (Native)</span>
        <span>English (85%)</span>
      </Intereses>

      <Intereses className="mt-4">
        <Section text="Languages" />
        <span>Spanish (Native)</span>
        <span>English (85%)</span>
      </Intereses>


      <Intereses className="intereses mt-4">
        <Section text="Hobies" />
        <span>Technologies</span>
        <span>Sports</span>
        <span>Books</span>
        <span>Music</span>
      </Intereses>

      <Intereses className="intereses mt-4">
        <Section text="Courses" />
        <span>Linux</span>
        <span>React+Strapi+Mongo</span>
        <span>MEAN</span>
        <span>MERN</span>
        <span>ASP Net Core MVC</span>
        <span>Vue</span>
        <span>React js</span>
      </Intereses>
    </>
  );
}
