import styled, { css } from "styled-components";
import { colores } from "../../scss/colores";

export const Lenguajes = styled.section`
    width: 70%;
    box-shadow: 0px 1px 9px gainsboro;
    border-radius: 5px;
    background-color: #fff;
    margin: 25px auto 0px;
    padding: 15px 20px 5px;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 1150px) {
        width: 90%;
        margin: 20px auto 0px;
    }
`

export const Lenguaje = styled.h2`
    background-color: #e8e8e8;
    color: #969999;
    padding: 8px 10px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;

    ${props => props.lan === true && css`
      background-color: ${colores.principal};
      color: #fff;
      &:hover {
        background-color: ${colores.principal_hover};
      }
    `}

    ${props => props.lan === false && css`
      &:hover {
        background-color: #e0e0e0;
      }
    `}

    &:first-child {
      margin-right: 10px;
    }
`