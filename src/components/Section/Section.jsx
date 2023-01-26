import styled from "styled-components";
import { colores } from '../../scss/colores';

const Titulo = styled.h3`
    border-left: 3px solid ${colores.principal};
    padding-left: 10px;
    color: ${colores.principal};
    font-size: 25px;
    letter-spacing: -1px;
    margin-bottom: 15px;
    @media only screen and (max-width: 767px) {
        font-size: 22px;
    }
`;
const Section = ({ titulo }) => <Titulo>{titulo}</Titulo>;

export default Section;