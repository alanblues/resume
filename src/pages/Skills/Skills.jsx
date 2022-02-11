import React from "react";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";
import {
  Habilidades,
  GrupoHabilidades,
  Detalle,
  Nombre,
  Progreso,
  Nivel,
} from "./Skills.style.js";

export default function Skills() {
  return (
    <Habilidades>
      <Section text="Main Professional Skills" />

      <GrupoHabilidades className="row">
        {Datos.habilidades().map((hab) => (
          <Detalle key={hab.id} className="col-sm-4">
            <Nombre>{hab.nombre}</Nombre>
            <Progreso className="progress">
              <Nivel
                className="progress-bar"
                role="progressbar"
                style={{ width: hab.nivel + "%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {hab.nivel}%
              </Nivel>
            </Progreso>
          </Detalle>
        ))}
      </GrupoHabilidades>
    </Habilidades>
  );
}
