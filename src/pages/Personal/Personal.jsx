import React from "react";

export default function Personal() {
  return (
    <div className="personal">
      <div className="personal_nombre">
        <div>
          <h1>Alan Parra</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="personal_nombre-datos">
          <a href="">3317460383</a>
          <a href="">dev.alanparra@gmail.com</a>
          <a href="">Guadalajara, Jalisco</a>
        </div>
      </div>

      <div className="personal_imagen">
        <div className="personal_imagen-img">
          <img src="https://picsum.photos/200/300" />
        </div>

        <div className="personal_imagen-descripcion">
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
        </div>
      </div>
    </div>
  );
}
