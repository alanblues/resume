import styled from "styled-components";
import {colores} from "../../scss/colores";

const Intereses = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem !important;

  span {
    font-size: 15px;
    color: darken(#797d7f, 20%);
    color: ${colores.secundario};
  }
`;

export { Intereses };