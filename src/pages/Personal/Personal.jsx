import React from "react";

export default function Personal() {
  return (
    <div className="datos">
      <div className="datos_personales">
        <div className="datos_personales-nombre">
          <h1>Alan Parra</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="datos_personales-datos">
          <a href="tel:3317460383">3317460383</a>
          <a href="mailto:dev.alanparra@gmail.com?subject=Hello world">dev.alanparra@gmail.com</a>
          <span>Guadalajara, Jalisco</span>
        </div>
      </div>

      <div className="datos_profesionales">
        <div className="datos_profesionales-foto">
          <img src={"./assets/img/yo.jpeg"} alt="Fotografia" />
        </div>

        <div className="datos_profesionales-descripcion">
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
          {/* <p>I make lots of modules, CLI tools and apps. Mostly Reac, Angular & Node</p> */}
        </div>
      </div>
    </div>
  );
}
