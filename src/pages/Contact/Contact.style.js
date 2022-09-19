import styled, { css } from "styled-components";
import { colores } from "../../scss/colores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contacto = styled.section`
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Formulario = styled.form`
  margin-top: 1rem;
  width: 65%;
  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const Mensaje = styled.div`
  margin-top: 1rem;
`;

export const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  height: 45px;
  line-height: 45px;
  padding: 0 35px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid #ced4da;

  &:focus {
    border: 1px solid ${colores.borderInput};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }

  ${props => props.valido === 'false' && css`
    border: 1px solid ${colores.error} !important;
  `}
`;

export const Label = styled.label`
  display: block;
  // font-weight: 700;
  min-height: 30px;
  cursor: pointer;

  ${props => props.valido === 'false' && css`
    color: ${colores.error};
  `}
`;

export const LeyendaError = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: true;
  `}

  ${props => props.valido === 'false' && css`
    display: block;
  `}
`;

export const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  // display: none;
`;

export const TesArea = styled.textarea`
  resize: none!important;
  &:focus {
    border: 1px solid ${colores.borderInput};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }
  ${props => props.valido === 'false' && css`
    border: 1px solid ${colores.error} !important;
  `}
`;

export const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 15px;
  z-index: 100;
  font-size: 16px;
  color: ${colores.error};
  opacity: 0;

  ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
  `}

  ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
  `}
`;

export const BotonEnviar = styled.button`
  background-color: ${colores.principal};
  color: #fff;
  margin-top: 10px;
  &:hover {
    color: #fff;
    background-color: ${colores.principal_hover};
  }
`;
