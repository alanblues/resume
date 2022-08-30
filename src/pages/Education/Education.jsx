import React from "react";
import Section from "../../components/Section/Section";
import {
  Educacion,
  GrupoTitulo,
  Titulo,
  Carrera,
  Universidad,
  Periodo,
} from "./Education.style";

export default function Education() {
  return (
    <Educacion>
      <Section titulo="Education" />
      <GrupoTitulo>
        <Titulo>
          <Carrera>Software Engineer&nbsp;</Carrera>
          <Universidad>Universidad Tecnológica del Sur de Sonora</Universidad>
        </Titulo>
        <Periodo>April 2011 - December 2012</Periodo>
      </GrupoTitulo>

      <GrupoTitulo mt="1rem">
        <Titulo>
          <Carrera>University Higher Technician in Software&nbsp;</Carrera>
          <Universidad>Universidad Tecnológica del Sur de Sonora</Universidad>
        </Titulo>
        <Periodo>September 2007 - August 2009</Periodo>
        
      </GrupoTitulo>
    </Educacion>
  );
}
