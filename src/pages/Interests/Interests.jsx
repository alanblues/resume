import React from "react";
import Collapsable from "../../components/Collapsable";
import { Intereses, Habilidades, ListaHabilidades, Habilidad } from "./Interests.style";
import { useBreakpoints } from '../../hooks/useBreakpoints';
import Datos from '.././../utilities/datos';

export default function Interests() {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <Collapsable title="Languages">
        <Intereses>
          <Habilidad>Spanish (Native)</Habilidad>
          <Habilidad>English (85%)</Habilidad>
        </Intereses>
      </Collapsable>

      <Collapsable title="Main Skills">
        <ListaHabilidades>
          {
            Datos.habilidades().map(hab => (
              <Habilidad key={hab.id}>{hab.nombre}</Habilidad>)
            )
          }
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title="Courses">
        <Intereses>
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
      </Collapsable>

      <Collapsable title="Hobbies">
        <Intereses>
          <Habilidad>Technologies</Habilidad>
          <Habilidad>Sports</Habilidad>
          <Habilidad>Books</Habilidad>
          <Habilidad>Music</Habilidad>
        </Intereses>
      </Collapsable>
    </>
  );
}
