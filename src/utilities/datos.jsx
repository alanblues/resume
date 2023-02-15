const Datos = (function () {
  return {
    empleos: [
      {
        id: 6,
        puesto: "Software Engineer",
        puestoEs: "Ingeniero de Software",
        compania: "Globant",
        lugar: "Guadalajara, Jalisco",
        antiguedad: "October 2019 - Current",
        antiguedadEs: "Octubre 2019 - Actual",
        descripcion: `
          <p>Software engineer implementing different frontend frameworks such as React, Vue, Angular and React Native</p>
          <p>Implementation of libraries such as Styled Component, FlexBox, Semantic UI, Bootstrap. As well as Fullstack technologies such as Mongo, Express, Nodejs</p>`,
        descEs: `
          <p>Ingeniero de software implementando diferentes frameworks de frontend tales como React, Vue, Angular y React Native</p>
          <p>Implementanción de librerias como Styled Component, FlexBox, Semantic UI, Bootstrap. Así como tecnologias Fullstack tales como Mongo, Express, Nodejs`
      },
      {
        id: 5,
        puesto: "Frontend Developer",
        puestoEs: "Desarrollador Frontend",
        compania: "Anzen Digital",
        lugar: "Guadalajara, Jal.",
        antiguedad: "December 2018 - October 2019",
        antiguedadEs: "Diciembre 2018 - Octubre 2019",
        descripcion: `<p>Frontend Developer working on projects developed with HTML3, CSS3, Angular,
          using features such as Observables, HttpClient, Guards among others.</p>`,
        descEs: `<p>Desarrollador Frontend trabajando en proyectos realizados con HTML, Angular,
          usando caracteristicas tales como Observables, HttpClient, Guards entre otros</p>`
      },
      {
        id: 4,
        puesto: "Frontend Developer",
        puestoEs: "Desarrollador Frontend",
        compania: "Intersys Consulting",
        lugar: "Guadalajara, Jal.",
        antiguedad: "January 2018 - August 2018",
        antiguedadEs: "Enero 2018 - Agosto 2018",
        descripcion: `<p>Frontend Developer working on projects developed with HTML3, CSS3, Angular,
          using features such as Observables, HttpClient, Guards among others.</p>`,
        descEs: `<p>Desarrollador Frontend trabajando en proyectos realizados con HTML, Angular,
          usando caracteristicas tales como Observables, HttpClient, Guards entre otros</p>`
      },
      {
        id: 3,
        puesto: "Software Engineer",
        puestoEs: "Ingeniero de Software",
        compania: "Softtek",
        lugar: "Guadalajara, Jal.",
        antiguedad: "June 2015 - November 2017",
        antiguedadEs: "Junio 2015 - Noviembre 2017",
        descripcion: `<p>Backend developer using C# ASP.NET, Razor, building APIs The application was hosting in Microsoft Teams</p>
          <p>In the same way giving monitoring and support to applications</p>`,
        descEs: `<p>Desarrollador Backend usando C# ASP.NET, Razor contruyendo APIs</p>
          <p>De igual forma dando seguimiento y soporte a aplicaciones</p>`
      },
      {
        id: 2,
        puesto: "Software Engineer",
        puestoEs: "Ingeniero de Software",
        compania: "Novutek S.C.",
        lugar: "Obregón, Son.",
        antiguedad: "May 2013 - June 2015",
        antiguedadEs: "Mayo 2013 - Junio 2015",
        descripcion: `<p>Fullstack developer using technologies such as C# ASP.NET and Razor</p>
          <p>Client side Frameworks: Angular, Javascript, JQuery, HTML3, CSS3, Bootstrap etc.</p>`,
        descEs: `<p>Desarrollador Fullstack tanto Frontend como Backend, utilizando tecnologías como C# ASP.Net y Razor.</p>
          <p>Frameworks del lado del cliente: Angular, Javascript, JQuery, HTML3, CSS3, Bootstrap entre otras</p>`
      },
      {
        id: 1,
        puesto: "Software Engineer",
        puestoEs: "Ingeniero de Software",
        compania: "SOA Software Factory",
        lugar: "Obregón, Son.",
        antiguedad: "April 2012 - August 2012",
        antiguedadEs: "Abril 2012 - Agosto 2012",
        descripcion: "<p>Full Stack Developer using technologies like ASP.NET, HTML, CSS and AngularJS</p>",
        descEs: "<p>Desarrollador Fullstack utilizando tecnologías como ASP.NET, HTML, CSS y AngularJS</p>"
      }
    ],
    habilidades: [
      { id: 1, nombre: "HTML", nivel: 90 },
      { id: 2, nombre: "CSS", nivel: 80 },
      { id: 3, nombre: "SASS", nivel: 85 },
      { id: 4, nombre: "Bootstrap", nivel: 90 },
      { id: 5, nombre: "Semantic UI", nivel: 80 },
      { id: 7, nombre: "JavaScript", nivel: 90 },
      { id: 8, nombre: "Angular", nivel: 85 },
      { id: 9, nombre: "React", nivel: 90 },
      { id: 10, nombre: "Vue", nivel: 70 },
      { id: 18, nombre: "Svelte3", nivel: 80 },
      { id: 11, nombre: "Unit Testing - Jest", nivel: 70 },
      { id: 12, nombre: "Typescrit", nivel: 80 },
      { id: 13, nombre: "Node", nivel: 85 },
      { id: 14, nombre: "Express", nivel: 80 },
      { id: 15, nombre: "Strapi", nivel: 80 },
      { id: 16, nombre: "Unit Testing - Cypress", nivel: 70 },
      { id: 17, nombre: "Unit Testing - Super Test", nivel: 70 },
      { id: 18, nombre: "...", nivel: 100 }
    ],
    softskills: [
      { id: 1, nombre: 'Verbal and written communication', nombreEs: 'Comunicación verbal y escrita' },
      { id: 2, nombre: 'Productivity', nombreEs: 'Productivad' },
      { id: 4, nombre: 'Teamwork', nombreEs: 'Trabajo en equipo' },
      { id: 5, nombre: 'Working under pressure', nombreEs: 'Trabajar bajo presión' },
      { id: 6, nombre: 'Passion for software development', nombreEs: 'Pasión al desarrollo de software' },
      { id: 7, nombre: 'Adaptability', nombreEs: 'Adaptabilidad' },
      { id: 8, nombre: 'Creativity', nombreEs: 'Creatividad' },
      { id: 9, nombre: '...' },
    ],
    cursos: [
      { id: 10, nombre: 'React Native' },
      { id: 1, nombre: 'Linux Administrator' },
      { id: 2, nombre: 'React JS, Strapi, Mongo' },
      { id: 3, nombre: 'Semantic UI + React' },
      { id: 4, nombre: 'Mongo, Express, Angular, Node' },
      { id: 5, nombre: 'Mongo, Express, React, Node' },
      { id: 6, nombre: 'React JS' },
      { id: 7, nombre: 'VUE3' },
      { id: 8, nombre: 'Angular 10' },
      { id: 9, nombre: 'CSS 3' }
    ],
    pasatiempos: [
      { id: 1, nombre: 'Technologies', nombreEs: 'Tecnologías' },
      { id: 2, nombre: 'Sports', nombreEs: 'Deporte' },
      { id: 3, nombre: 'Books', nombreEs: 'Libros' },
      { id: 4, nombre: 'Music', nombreEs: 'Musica' }
    ]
  };
})();

export default Datos;
