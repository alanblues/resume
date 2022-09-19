import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useBreakpoints } from '../hooks/useBreakpoints';
import Section from './Section/Section';
import styled from "styled-components";
import { colores } from '../scss/colores';

const Titulo = styled.h3`
    color: ${colores.principal};
    font-size: 20px;
    margin-bottom: 15px;
    cursor: pointer;
    letter-spacing: 0px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 10px;
    svg {
        margin-right: 13px;
    }
`

const Collapsable = ({ title, children }) => {
    const [collapse, setCollapse] = useState('none');
    const { isMobile } = useBreakpoints();

    const onCollapse = () => { setCollapse(collapse === 'block' ? 'none' : 'block'); }

    if (isMobile) {
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