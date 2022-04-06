import styled from "styled-components";
import { colores } from '../../scss/colores';

const Seccion = styled.h3`
    border-left: 5px solid ${colores.principal};
    padding-left: 10px;
    color: ${colores.principal};
    font-size: 25px;
    letter-spacing: -1.5px;
`;

const Section = ({text}) => <Seccion>{text}</Seccion>

export default Section;