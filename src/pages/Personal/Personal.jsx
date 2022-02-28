import React from "react";
import {
  DatosPersonales,
  Nombre,
  Profesion,
  DatosProfesionales,
  Contacto,
  Telefono,
  Correo,
  Ubicacion,
  Fotografia,
  Descripcion,
} from "./Personal.style";

export default function Personal() {
  return (
    <>
      <DatosPersonales>
        <div>
          <Nombre>Alan Parra</Nombre>
          <Profesion>Software Engineer</Profesion>
        </div>

        <Contacto>
          <Telefono href="tel:3317460383">3317460383</Telefono>
          <Correo href="mailto:dev.alanparra@gmail.com?subject=Hello world">
            dev.alanparra@gmail.com
          </Correo>
          <Ubicacion>Guadalajara, Jalisco</Ubicacion>
        </Contacto>
      </DatosPersonales>

      <DatosProfesionales>
        <Fotografia src={"./assets/img/yo.jpeg"} alt="Fotografia" />
        <Descripcion>
          <p>
            Hello World! I am Alan Parra. I am passionate about software
            development web and mobile. I am a Front-end Developer I know how to
            work with Frameworks such as Bootstrap, Semantic, React, Angular
            etc.
          </p>

          <p>
            Develop as a valuable and outstanding element that contributes
            greatly to the optimal growth and evolution of your company.
            Continue learning new technologies and put into practice my acquired
            knowledge in these years
          </p>
        </Descripcion>
      </DatosProfesionales>
    </>
  );
};
