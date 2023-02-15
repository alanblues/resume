import styled from "styled-components";
import { colores } from "../../scss/colores";

export const SectionAcercade = styled.section`
  margin-top: -69px;
  margin-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid ${colores.linea};
`;

export const Imagen = styled.figure`
  margin-bottom: 8px;
  img {
    width: 132px;
    height: 167px;
    border-radius: 50%;
    border: 1px solid gainsboro;
  }
`

export const Nombre = styled.h2`
  font-weight: bold;
  margin-bottom: 0px;
`

export const Especialidades = styled.div`
  span:not(:last-child):after {
    content: ' / ';
  }
`;