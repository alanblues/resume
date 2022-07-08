import React from "react";
import Section from "../../components/Section/Section";
import { Intereses, Habilidades, ListaHabilidades, Habilidad } from "./Interests.style";
import Datos from '.././../utilities/datos';

export default function Interests() {
  return (
    <>
      <Intereses>
        <Section titulo="Languages" />
        <Habilidad>Spanish (Native)</Habilidad>
        <Habilidad>English (85%)</Habilidad>
      </Intereses>

      <Habilidades>
        <Section titulo="Main Skills" />
        <ListaHabilidades>
          {
            Datos.habilidades().map(hab => (
              <Habilidad key={hab.id}>{hab.nombre}</Habilidad>)
            )
          }
        </ListaHabilidades>
      </Habilidades>

      <Intereses>
        <Section titulo="Courses" />
        <Habilidad>Linux</Habilidad>
        <Habilidad>React, Strapi, Mongo</Habilidad>
        <Habilidad>MEAN</Habilidad>
        <Habilidad>MERN</Habilidad>
        <Habilidad>NGINX</Habilidad>
        <Habilidad>React</Habilidad>
        <Habilidad>Angular 10</Habilidad>
        <Habilidad>Vue X</Habilidad>
        <Habilidad>CSS 3</Habilidad>
        <Habilidad>Unit Testing - Jest</Habilidad>
      </Intereses>

      <Intereses>
        <Section titulo="Hobbies" />
        <Habilidad>Technologies</Habilidad>
        <Habilidad>Sports</Habilidad>
        <Habilidad>Books</Habilidad>
        <Habilidad>Music</Habilidad>
      </Intereses>
    </>
  );
}
