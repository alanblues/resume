import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useBreakpoints } from '../hooks/useBreakpoints';
import { colores } from '../scss/colores';

const Titulo = styled.h3`
    display: flex;
    color: ${colores.principal};
    font-size: 20px;
    margin-bottom: 15px;
    cursor: pointer;
    letter-spacing: 0px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 10px;
    svg {
        margin-right: 13px;
        font-size: 17px;
    }
`

const CollapsableWork = ({ title, children }) => {
    const [collapse, setCollapse] = useState('none');
    const { isMobile } = useBreakpoints();

    const onCollapse = () => { setCollapse(collapse === 'block' ? 'none' : 'block'); }

    // if(isMobile) {
    //     return (
    //         <p>mobile</p>
    //     )
    // }

    return (
        <article>
            <Titulo onClick={onCollapse}>
                <FontAwesomeIcon icon={collapse == 'block' ? faChevronUp : faChevronDown} />
                {title}
            </Titulo>
            <div style={{ display: collapse }}>
                {children}
            </div>
        </article>
    );
}

export default CollapsableWork;