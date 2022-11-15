import React from "react";
import Collapsable from "../../components/Collapsable";
import { ListaHabilidades, Habilidad } from "./Interests.style";
import Datos from '.././../utilities/datos';

export default function Interests() {
  return (
    <>
      <Collapsable title="Languages">
        <ListaHabilidades>
          <Habilidad>Spanish (Native)</Habilidad>
          <Habilidad>English (85%)</Habilidad>
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title="Main Skills">
        <ListaHabilidades envuelto>
          { <Presentador datos={Datos.habilidades()} /> }
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title="Courses">
        <ListaHabilidades>
          { <Presentador datos={Datos.cursos()} /> }
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title="Hobbies">
        <ListaHabilidades>
          {<Presentador datos={Datos.pasatiempos()} />}
        </ListaHabilidades>
      </Collapsable>
    </>
  );
}

const Presentador = datos => (
  datos.datos.map(hab => (
    <Habilidad key={hab.id}>{hab.nombre}</Habilidad>)
  )
);
