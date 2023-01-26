import styled from "styled-components";
import { colores, sizes } from "../../scss/colores";

export const Educacion = styled.section`
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const GrupoTitulo = styled.div`
  margin-top: ${(props) => props.mt};
`;

export const Titulo = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: -5px;
  flex-wrap: wrap;
`;

export const Carrera = styled.h2`
  margin-top: -5px;
  font-size: ${sizes.title};
  color: ${colores.titulo};
  font-weight: 700;
`;

export const Universidad = styled.span`
  margin-top: -5px;
`;

export const Periodo = styled.span`
  color: ${colores.secundario};
  font-size: ${sizes.periodos};
`;
