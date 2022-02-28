import styled from "styled-components";
import { colores } from "../../scss/colores";

export const Habilidades = styled.section`
  border-top: 1px solid ${colores.linea};
  padding-top: 30px;
  margin-top: 1.5rem !important;
`;

export const GrupoHabilidades = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Detalle = styled.article`margin-bottom: 10px;`;

export const Nombre = styled.span`
  font-size: 1rem;
  color: ${colores.secundario};
`;

export const Progreso = styled.div`
  height: 15px;
  font-size: 14px;
`;

export const Nivel = styled.div`background-color: #599cc8 !important;`;
