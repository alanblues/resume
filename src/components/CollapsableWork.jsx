import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Titulo = styled.h3`
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid gainsboro;
    margin-top: 10px;
    padding-bottom: 10px;
    svg {
        margin-right: 13px;
        font-size: 16px;
    }
`;

const CollapsableWork = ({ titulo, children }) => {
    const [collapse, setCollapse] = useState(false);
    const onCollapse = () => setCollapse(!collapse);

    return (
        <article>
            <Titulo onClick={onCollapse}>
                <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronDown} />
                {titulo}
            </Titulo>
            { collapse && <>{children}</> }
        </article>
    );
}

export default CollapsableWork;