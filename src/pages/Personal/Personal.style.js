import styled from "styled-components";
import { colores } from "../../scss/colores";

export const DatosPersonales = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colores.linea};
  padding-bottom: 15px;

  @media only screen and (max-width: 485px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Nombre = styled.h1`
  color: ${colores.principal};
  letter-spacing: -1px;
  font-weight: 700;
`;

export const Profesion = styled.h2`
  color: ${colores.titulo};
  font-size: 20px;
  margin-top: -10px;
`;

export const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colores.linea};
  padding-left: 15px;

  @media only screen and (max-width: 485px) {
    border-left: none;
    padding-left: 0px;
  }
`;

export const Telefono = styled.article`
  font-size: 15px;
  color: #797d7f;
  a {
    color: #797d7f;
    &:hover {
      color: #54b689;
    }
  }
  
`;

export const Correo = styled.article`
  color: #797d7f;
  a {
    font-size: 15px;
    color: #797d7f;
    &:hover {
      color: #54b689;
    }
}
  
`;

export const Ubicacion = styled.span`
  font-size: 15px;
  color: #797d7f;
`;

export const DatosProfesionales = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Fotografia = styled.img`
  height: 200px;
  border-radius: 30px 0 30px 30px;
  border: 1px solid gainsboro;
`;

export const Descripcion = styled.div`
  margin-left: 25px;

  @media only screen and (max-width: 700px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`;
