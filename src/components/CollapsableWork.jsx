import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colores } from '../scss/colores';

const Titulo = styled.div`
    display: flex;
    cursor: pointer;
    margin-bottom: 7px;
    border-bottom: 1px solid gainsboro;
    margin-top: 10px;
    padding-bottom: 10px;
    svg {
        margin-right: 13px;
        font-size: 16px;
    }
`;
const Contenido = styled.div`
    background-color: ${colores.fondos};
    padding: 10px;
`

const CollapsableWork = ({ titulo, children }) => {
    const [collapse, setCollapse] = useState(false);
    const onCollapse = () => setCollapse(!collapse);

    return (
        <article>
            <Titulo onClick={onCollapse}>
                <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronDown} />
                {titulo}
            </Titulo>
            { collapse && <Contenido>{children}</Contenido> }
        </article>
    );
}

export default CollapsableWork;