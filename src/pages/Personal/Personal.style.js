import styled from "styled-components";
import { colores } from "../../scss/colores";

export const DatosPersonales = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    border-left: none;
    padding-left: 0px;
  }
`;

export const Contacto = styled.article`
  font-size: 16px;
  color: ${colores.secundario};
  a {
    color: ${colores.secundario};
    text-decoration: none;
    border-bottom: 1px solid ${colores.linea};;
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