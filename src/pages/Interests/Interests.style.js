import styled, {css} from "styled-components";

export const ListaHabilidades = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${props => props.envuelto && css`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 15px;
  `}
`;

export const Habilidad = styled.span`
  background-color: #f2f3f4;
  margin-right: 5px;
  padding: 3px 7px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: block;
`;