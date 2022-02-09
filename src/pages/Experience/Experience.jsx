import React from "react";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";
import Interests from "../Interests/Interests";
import Skills from "../Skills/Skills";

export default function Experience() {
  return (
      <section className="work mt-4">
        <div className="row">
          <div className="col-md-8 mt-3">
            <Section text="Work Experience" />
            {Datos.empleos().map((emp) => (
              <div className="apcard mt-3" key={emp.id}>
                <section className="apcard-company">
                  <h2 className="mr-5 role">{emp.puesto}</h2>
                  <span className="companyName">{emp.compania}</span>
                  <span>{emp.lugar}</span>
                </section>
                <span className="apcard-time">{emp.antiguedad}</span>
                <p className="mt-3">{emp.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="col-md-4 mt-3">
            <Interests />
            {/* <Skills /> */}
          </div>
        </div>
      </section>
  );
}
