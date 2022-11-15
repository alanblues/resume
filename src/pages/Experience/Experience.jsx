import React from "react";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";
import Interests from "../Interests/Interests";
import CollapsableWork from "../../components/CollapsableWork";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import {
  ExperienciaIntereses, Experiencia, DatosEmpresa, Puesto,
  Empresa, Lugar, Antiguedad, LugarFechaMobile, SeccionIntereses
} from './Experience.style';


export default function Experience() {
  const { isMobile } = useBreakpoints();
  return (
    <ExperienciaIntereses>
      <div className="row">
        <section className="col-md-8 mb-sm-15">
          <Section titulo="Work Experience" />
          {isMobile ?
            Datos.empleos().map(emp =>
              <CollapsableWork key={emp.id} titulo={
                <DatosEmpresa>
                  <Puesto>{emp.puesto}</Puesto>
                  <Empresa>{emp.compania}</Empresa>
                </DatosEmpresa>
              }>
                <LugarFechaMobile>
                  <Lugar>{emp.lugar}</Lugar>
                  <Antiguedad>{emp.antiguedad}</Antiguedad>
                </LugarFechaMobile>
                <p className="mt-2">{emp.descripcion}</p>
              </CollapsableWork>
            ) :
            Datos.empleos().map(emp =>
              <Experiencia key={emp.id}>
                <DatosEmpresa>
                  <Puesto>{emp.puesto}</Puesto>
                  <Empresa>{emp.compania}</Empresa>
                  <Lugar>{emp.lugar}</Lugar>
                </DatosEmpresa>
                <Antiguedad>{emp.antiguedad}</Antiguedad>
                <p className="mt-3">{emp.descripcion}</p>
              </Experiencia>
            )
          }
        </section>
        <SeccionIntereses className="col-md-4">
          <Interests />
        </SeccionIntereses>
      </div>
    </ExperienciaIntereses>
  );
}