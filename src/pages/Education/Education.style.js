import styled from "styled-components";
import { colores } from "../../scss/colores";

export const Educacion = styled.section`
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const GrupoTitulo = styled.article`
  margin-top: ${(props) => props.mt};
`;

export const Titulo = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: -5px;
  flex-wrap: wrap;
`;

export const Carrera = styled.h2`
  font-size: 1rem;
  color: ${colores.titulo};
  font-weight: 700;
  margin-top: -5px;
`;

export const Universidad = styled.span`
  margin-top: -5px;
`;

export const Periodo = styled.span`
  color: ${colores.secundario};
  font-size: 14px;
  // @media only screen and (max-width: 750px) {
  //   background-color: pink;
  // }
`;
