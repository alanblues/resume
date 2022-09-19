const Datos = (function () {
  return {
    empleos: function () {
      const todos = [
        {
          id: 6,
          puesto: "Software Engineer",
          compania: "Globant,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "October 2019 - Current",
          descripcion: `Software Engineer implementing technologies in different environments,
          In the Front end such as React, Vue 3, Svelte among others.
          In the Backend, some such as Express, Node, MongoDB querying endpoints with axios, in addition to using the library such as Redux, Styled components, FlexBox Semantic UI, among others`,
        },
        {
          id: 5,
          puesto: "Front-end Developer",
          compania: "Anzen Digital,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "January 2018 - October 2019",
          descripcion: `Software Developer working with projects made in Angular 9, using its features such as Observables, HttpClient, as well as protecting routes with guard.
          form handling with Reactive forms and layout with Bootstrap, SASS and HTML5`,
        },
        {
          id: 4,
          puesto: "Front-end Developer",
          compania: "Intersys Consulting",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "January 2018 - September 2018"
        },
        {
          id: 3,
          puesto: "Software Engineer",
          compania: "Softtek,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "June 2015 - November 2017",
          descripcion:
            "Back end developer using ASP.NET, Razor, building APIs The application was hosting in Microsoft Teams",
        },
        {
          id: 2,
          puesto: "Software Engineer",
          compania: "Novutek S.C.,",
          lugar: "Obregón, Sonora",
          antiguedad: "May 2013 - June 2015",
          descripcion: `Full Stack Developer using ASP.NET to build the API service and publish
            the endpoint in IIS.
            It used Razor, Lamda Expressions and with Angular 2 (Httpclient, Observables, Guards, RxJs,
            Reactive forms) build the views and validations of client side
            In this part we consulting the endpoints`,
        },
        {
          id: 1,
          puesto: "Software Engineer",
          compania: "SOA Software Factory",
          lugar: "Obregón, Sonora",
          // antiguedad: "January 2012 - April 2012",
          antiguedad: "May 2010 - August 2012",
          descripcion: "Warehouse manager, registering inputs and outputs of products, in charge of creating inventory system",
        }
      ];
      return todos;
    },
    habilidades: () => {
      const lista = [
        { id: 1, nombre: "HTML", nivel: 90 },
        { id: 2, nombre: "CSS", nivel: 80 },
        { id: 3, nombre: "SASS", nivel: 85 },
        { id: 4, nombre: "Bootstrap", nivel: 90 },
        { id: 5, nombre: "Semantic UI", nivel: 80 },
        { id: 7, nombre: "JavaScript", nivel: 90 },
        { id: 8, nombre: "Angular", nivel: 85 },
        { id: 9, nombre: "React", nivel: 90 },
        { id: 10, nombre: "Vue3", nivel: 70 },
        { id: 18, nombre: "Svelte3", nivel: 80 },
        { id: 11, nombre: "Unit Testing - Jest", nivel: 70 },
        { id: 12, nombre: "Typescrit", nivel: 80 },
        { id: 13, nombre: "Node", nivel: 85 },
        { id: 14, nombre: "Express", nivel: 80 },
        { id: 15, nombre: "Strapi", nivel: 80 },
        { id: 16, nombre: "Unit Testing - Cypress", nivel: 70 },
        { id: 17, nombre: "Unit Testing - Super Test", nivel: 70 }
      ];

      return lista;
    },
    cursos: () => {
      return [
        { id: 1, nombre: 'Linux Administrator - online' },
        { id: 2, nombre: 'React JS, Strapi, Mongo' },
        { id: 3, nombre: 'Semantic UI + React' },
        { id: 4, nombre: 'Mongo, Express, Angular, Node' },
        { id: 5, nombre: 'React JS' },
        { id: 6, nombre: 'VUE' },
        { id: 7, nombre: 'Angular 10' }
      ]
    }
  };
})();

export default Datos;
