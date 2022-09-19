import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  DatosPersonales,
  Nombre,
  Profesion,
  DatosProfesionales,
  DatosContacto,
  Contacto,
  Ubicacion,
  Fotografia,
  Descripcion,
  Caree
} from "./Personal.style";


export default function Personal() {
  return (
    <>
      <DatosPersonales>
        <div>
          <Nombre>Alan Parra</Nombre>
          <Profesion>Software Engineer</Profesion>
        </div>

        <DatosContacto>
          <Contacto>
            <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
            <a href="tel:3317460383">3317460383</a>
          </Contacto>
          <Contacto>
            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
            <a href="mailto:dev.alanparra@gmail.com?subject=Hello world">dev.alanparra@gmail.com</a>
          </Contacto>
          <Ubicacion>
            <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;
            Guadalajara, Jalisco
          </Ubicacion>
        </DatosContacto>
      </DatosPersonales>

      <DatosProfesionales>
        <Fotografia src={"./assets/img/yo.jpeg"} alt="Fotografia" />
        <Caree>
          <h1>Alan Parra</h1>
          <p>Software Engineer & Web Developer</p>
        </Caree>
        <Descripcion>
          <h2>About Me</h2>
          <p>
            ¡Hello World! I am Alan Parra. I am passionate about software development, Website and mobile App.
            I am a Front-end Developer I know how to work with Frameworks such as Nodejs, Bootstrap, Semantic UI, React, VueX, Angular.
          </p>

        </Descripcion>
      </DatosProfesionales>
    </>
  );
};
