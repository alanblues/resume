import styled from 'styled-components';

export const ExperienciaIntereses = styled.section`
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    border-bottom: 0px;
    padding-bottom: 0px;
  }
`;

export const Experiencia = styled.article`
  border-bottom: 1px solid gainsboro;
  margin-top: 1rem;
  &:last-child {
    border-bottom: none;
  }
`;

export const DatosEmpresa = styled.div`
  // margin-top: 0px;
  display: flex;
  flex-direction: row;
  margin-bottom: -5px;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const Puesto = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #212f3d;
  margin-right: 8px;
`;

export const Empresa = styled.span`
  color: #599cc8;
  font-weight: bold;
  margin-right: 8px;
  font-size: 15px;
  margin-top: -5px;
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Lugar = styled.span`
  font-size: 15px;
  margin-top: -5px;
`;

export const Antiguedad = styled.span`
  color: #797d7f;
  top: -10px;
  font-size: 14px;
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