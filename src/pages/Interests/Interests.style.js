import styled from "styled-components";
import {colores} from "../../scss/colores";

export const Intereses = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px !important;

  span {
    font-size: 15px;
    color: ${colores.secundario};
  }
`;