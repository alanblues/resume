import styled from "styled-components";
import {colores} from "../../scss/colores";

const Intereses = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    color: darken(#797d7f, 20%);
    color: ${colores.secundario};
  }
`;

export { Intereses };