import React from "react";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";
import Interests from "../Interests/Interests";

export default function Experience() {
  return (
    <section className="work mt-4">
      <div className="row">
        <div className="col-md-8">
          <Section titulo="Work Experience" />
          {
            Datos.empleos().map((emp) =>
              <article className="apcard mt-3" key={emp.id}>
                <section className="apcard-company">
                  <h2 className="mr-5 role">{emp.puesto}</h2>
                  <span className="companyName">{emp.compania}</span>
                  <span>{emp.lugar}</span>
                </section>
                <span className="apcard-time">{emp.antiguedad}</span>
                <p className="mt-3">{emp.descripcion}</p>
              </article>
            )
          }
        </div>
        <aside className="work_interest col-md-4">
          <Interests />
        </aside>
      </div>
    </section>
  );
}
