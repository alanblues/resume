const Datos = (function () {
  return {
    empleos: function () {
      const todos = [
        {
          id: 1,
          puesto: "Front-end Developer",
          compania: "Globant,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "October 2019 - Current",
          descripcion: `Frontend Developer implementing technologies such as React JS, Angular, Express, Node js, consulting endpoints with axios, in addition to using the library such as Redux, Styled components, FlexBox etc.`,
        },
        {
          id: 2,
          puesto: "Front-end Developer",
          compania: "Anzen Digital,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "September 2018 - October 219",
          descripcion: `Software Developer working with projects made in Angular 8, using its features such as Observables, using the HttpClient library to connect external services, as well as protecting routes with guard.
          Manipulation of forms with Reactiveforms and layout with Bootstrap, SASS and HTML5`,
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
          id: 4,
          puesto: "Software Engineer",
          compania: "Novutek S.C.,",
          lugar: "Obregón, Sonora",
          antiguedad: "May 2013 - June 2015",
          descripcion: `Full Stack Developer using ASP.NET to build the API service and publish
            the endpoint in IIS.
            It used Razor, Lamda Expressions and with Angular 2 (Httpclient, Observables, Guards, RxJs,
            ReactiveForms) build the views and validations of client side
            In this part we consulting the endpoints`,
        },
        {
          id: 5,
          puesto: "Software Engineer",
          compania: "SOA Software Factory",
          lugar: "Obregón, Sonora",
          antiguedad: "January 2012 - April 2012",
          descripcion: "",
        },
        {
          id: 6,
          puesto: "Software Engineer",
          compania: "Data Alliance Antenna Company",
          lugar: "Nogales, Sonora",
          antiguedad: "May 2010 - August 2011",
          descripcion:
            "Charge of warehouse, recording inputs and outputs of products",
        },
      ];
      return todos;
    },
    habilidades: () => {
      const lista = [
        { id: 9, nombre: "HTML", nivel: 90 },
        { id: 10, nombre: "CSS", nivel: 90 },
        { id: 1, nombre: "React js", nivel: 90 },
        { id: 2, nombre: "Angular", nivel: 90 },
        { id: 3, nombre: "Vue", nivel: 70 },
        { id: 4, nombre: "Redux", nivel: 85 },
        { id: 12, nombre: "NgRx", nivel: 80 },
        { id: 13, nombre: "Express", nivel: 75 },
        { id: 5, nombre: "Node js", nivel: 80 },
        { id: 11, nombre: "Express", nivel: 80 },
        { id: 6, nombre: "Typescript", nivel: 80 },
        { id: 7, nombre: "Semantic UI", nivel: 80 },
        { id: 8, nombre: "Bootstrap", nivel: 90 },
      ];

      return lista;
    },
    cursos: () => {
      return [
        { id: 1, nombre: 'Linux Administrator - online'},
        { id: 2, nombre: 'React JS, Strapi, Mongo' },
        { id: 3, nombre: 'Semantic UI + React' },
        { id: 4, nombre: 'Mongo, Express, Angular, Node' },
        { id: 5, nombre: 'VUE' },
        { id: 6, nombre: 'React Js' }
      ]
    }
  };
})();

export default Datos;
