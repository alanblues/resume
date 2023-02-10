import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useBreakpoints } from '../hooks/useBreakpoints';
import Section from './Section/Section';
import styled from "styled-components";
import { colores } from '../scss/colores';

const Titulo = styled.h3`
    color: ${colores.principal};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 1px solid gainsboro;
    margin-bottom: 10px;
    padding-bottom: 10px;
    svg {
        margin-right: 13px;
        font-size: 16px;
    }
`

const Collapsable = ({ title, children }) => {
    const [collapse, setCollapse] = useState(false);
    const { isMobile } = useBreakpoints();

    const onCollapse = () => setCollapse(!collapse);

    if (isMobile) {
        return (
            <article>
                <Titulo onClick={onCollapse}>
                    <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronDown} />
                    {title}
                </Titulo>
                {collapse && <>{children}</>}
            </article>
        )
    }

    return (
        <article>
            <Section titulo={title} />
            {children}
        </article>
    );
};

export default Collapsable;