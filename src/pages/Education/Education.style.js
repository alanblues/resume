import styled from "styled-components";
import { colores } from "../../scss/colores";

export const SeccionEducacion = styled.div`
  border-top: 1px solid ${colores.linea};
  padding-top: 30px;
  margin-top: 1.5rem;
`;

export const GrupoTitulo = styled.article`
    margin-top: ${props => props.mt}
`;

export const Titulo = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: -5px;
  flex-wrap: wrap;

  h2 {
    font-size: 1rem;
    color: ${colores.titulo};
    font-weight: 700;
    margin-top: -5px;
  }
  span {
    margin-top: -5px;
  }
`;

export const Periodo = styled.span`
  color: ${colores.secundario};
  font-size: 14px;
`;
