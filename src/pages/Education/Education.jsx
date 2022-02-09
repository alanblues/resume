import React from "react";
import Section from "../../components/Section/Section";

export default function Education() {
  return (
    <section className="education mt-4">
      <Section text="Education" />
      <article className="mt-4">
        <div className="education_title">
          <h2>Software Engineer&nbsp;</h2>
          <span>Universidad Tecnológica del Sur de Sonora</span>
        </div>
        <span className="education_period">2011 to January 2013</span>
      </article>

      <article className="mt-3">
        <div className="education_title">
          <h2>University Higher Technician in Software&nbsp;</h2>
          <span>Universidad Tecnológica del Sur de Sonora</span>
        </div>
        <span className="education_period">September 2007 to January 2010</span>
      </article>
    </section>
  );
}
