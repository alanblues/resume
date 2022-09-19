import styled from "styled-components";
import { colores } from "../../scss/colores";

export const DatosPersonales = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 10px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    div:nth-child(1) { display: none; }
  }
`;

export const Nombre = styled.h1`
  color: ${colores.principal};
  letter-spacing: -1px;
  font-weight: 700;
`;

export const Profesion = styled.h2`
  color: ${colores.titulo};
  font-size: 20px;
  margin-top: -10px;
`;

export const DatosContacto = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colores.linea};
  padding-left: 15px;

  @media only screen and (max-width: 700px) {
    border-left: none;
    padding-left: 0px;
  }
`;

export const Contacto = styled.article`
  font-size: 15px;
  color: #797d7f;
  a {
    color: #797d7f;
    text-decoration: none;
    border-bottom: 1px solid ${colores.linea}; //#adb0b1;
    &:hover {
      color: #54b689;
      border-color: #54b689;
    }
  }
`;

export const Ubicacion = styled.span`
  font-size: 15px;
  color: #797d7f;
`;

export const DatosProfesionales = styled.section`
  display: flex;
  margin-top: 30px;
  // align-items: center;
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 10px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Fotografia = styled.img`
  height: 180px;
  border-radius: 10px;
  border: 1px solid gainsboro;
`;

export const Descripcion = styled.div`
  margin-left: 25px;
  font-size: 15px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 700px) {
    margin-left: 0px;
    margin-top: 15px;
    border-top: 1px solid gainsboro;
    padding-top: 25px;

    h2 { display: block; }
  }
`;

export const Caree = styled.div`
  display: none;
  text-align: center;

  h1 {
    margin: 10px 0 0;
    color: ${colores.principal};
    letter-spacing: -1px;
    font-weight: 700;
  }
  // p { color: ${colores.secundario}; }

  @media only screen and (max-width: 700px) {
    display: block;
  }
`