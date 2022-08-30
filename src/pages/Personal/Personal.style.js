import styled from "styled-components";
import { colores } from "../../scss/colores";

export const DatosPersonales = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 10px;

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
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

  @media only screen and (max-width: 540px) {
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
  align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Fotografia = styled.img`
  height: 180px;
  // border-radius: 30px 0 30px 30px;
  border-radius: 50%;
  border: 1px solid gainsboro;
`;

export const Informacion = styled.div`
  margin-left: 25px;
  font-size: 15px;

  @media only screen and (max-width: 700px) {
    margin-left: 0px;
    margin-top: 15px;
    text-align: justify;
  }
`;