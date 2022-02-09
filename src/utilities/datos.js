const Datos = (function () {
  var iva = 0.18;

  return {
    empleos: function () {
      const todos = [
        {
          id: 1,
          puesto: "Front-end Developer",
          compania: "Globant,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "October 2019 - Current",
          descripcion: `It was development a software implemented with React JS,
                    using hooks, class components and styled components,
                    consulting endpoints with axios, in addition using the library Redux.
                    In this project it was layout using Semantic UI React, Flex, SASS
                    Same way in another project it worked with Angular 8,
                    using httpsclient, observables, routes, protect routes with Guards
                    it used Bootstrap 4 in the framework to layout,
                    These projects were worked with the Git version manager
                    with it repository Github`,
        },
        {
          id: 2,
          puesto: "Front-end Developer",
          compania: "Anzen Digital,",
          lugar: "Guadalajara, Jalisco",
          antiguedad: "September 2018 - October 219",
          descripcion: `All these projects were implemented with Angular 8, using its characteristics as Observables,
            Through the HttpClient library external services were connected, as well as protecting routes
            with guard. Manipulating forms with Reactiveforms.`,
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
          descripcion: `Full stack role using ASP.NET to build the API service and publish
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
        {id: 9, nombre: 'HTML', nivel: 90},
        {id: 10, nombre: 'CSS', nivel: 90},
        {id: 1, nombre: 'React js', nivel: 90},
        {id: 2, nombre: 'Angular', nivel: 90},
        {id: 3, nombre: 'Vue', nivel: 70},
        {id: 4, nombre: 'Redux', nivel: 85},
        {id: 5, nombre: 'Node js', nivel: 80},
        {id: 11, nombre: 'Express', nivel: 80},
        {id: 6, nombre: 'Typescript', nivel: 80},
        {id: 7, nombre: 'Semantic UI', nivel: 80},
        {id: 8, nombre: 'Bootstrap', nivel: 90}
      ];

      return lista
    }
  };
})();

export default Datos;
