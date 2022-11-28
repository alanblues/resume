import styled from "styled-components";
import { colores } from "../../scss/colores";

export const DatosProfesionales = styled.section`
  display: flex;
  border-bottom: 1px solid ${colores.linea};
  margin-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const Fotografia = styled.img`
  height: 180px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 169px;
  }
`;

export const Descripcion = styled.div`
  margin-left: 25px;
  font-size: 15px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const Carrera = styled.div`
  display: none;
  text-align: center;

  h1 {
    margin: 10px 0 0;
    color: ${colores.principal};
    letter-spacing: -1px;
    font-weight: 700;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`