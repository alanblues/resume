import styled from 'styled-components';
import { colores, sizes } from '../../scss/colores';

export const ExperienciaIntereses = styled.section`
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    border-bottom: 0px;
    padding-bottom: 0px;
  }
`;

export const Experiencia = styled.article`
  padding: 10px;
  margin-top: 1rem;
  background-color: ${colores.fondos};
  &:last-child {
    border-bottom: none;
  }
`;

export const DatosEmpresa = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -5px;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const Puesto = styled.h2`
  margin-right: 8px;
  font-size: ${sizes.title};
  font-weight: 700;
  color: ${colores.titulo};
`;

export const Empresa = styled.span`
  color: #599cc8;
  font-size: 17px;
  font-weight: bold;
  margin-right: 8px;
  margin-top: -5px;
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Lugar = styled.span`margin-top: -5px;`;

export const Antiguedad = styled.span`
  top: -10px;
  font-size: ${sizes.periodos};
  color: ${colores.secundario};
`;

export const LugarFechaMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SeccionIntereses = styled.section`
  border-left: 1px solid gainsboro;
  padding-left: 25px !important;
  @media only screen and (max-width: 767px) {
    border-left: 0;
    padding-left: 12px!important;
  }
`;