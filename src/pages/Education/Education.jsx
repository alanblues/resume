import React from "react";
import Section from "../../components/Section/Section";
import {
  SeccionEducacion,
  GrupoTitulo,
  Titulo,
  Periodo
} from "./Education.style";

export default function Education() {
  return (
    <>
      <SeccionEducacion>
        <Section text="Education" />
        <GrupoTitulo mt="1.5rem">
          <Titulo>
            <h2>Software Engineer&nbsp;</h2>
            <span>Universidad Tecnológica del Sur de Sonora</span>
          </Titulo>
          <Periodo>September 2007 to January 2010</Periodo>
        </GrupoTitulo>

        <GrupoTitulo mt="1rem">
          <Titulo>
            <h2>University Higher Technician in Software&nbsp;</h2>
            <span>Universidad Tecnológica del Sur de Sonora</span>
          </Titulo>
          <Periodo>September 2007 to January 2010</Periodo>
        </GrupoTitulo>
      </SeccionEducacion>
    </>
  );
}
