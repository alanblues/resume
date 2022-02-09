import React from "react";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";

export default function Skills() {
  return (
    <div className="habilidad mt-4">
      <Section text="Main Professional Skills" />

      <div className="row mt-3">
        {Datos.habilidades().map((hab) => (
          <div key={hab.id} className="habilidad_grupo col-sm-4">
            <span>{hab.nombre}</span>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: hab.nivel + "%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {hab.nivel}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
