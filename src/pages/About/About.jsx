import React, { useState } from 'react';
import { DatosProfesionales, Fotografia, Descripcion, Carrera } from './About.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export default function Personal() {
    const { isMobile } = useBreakpoints();

    return (
        <DatosProfesionales>
            <Fotografia src={"./assets/img/yo.jpeg"} alt="Fotografia" />
            <Carrera>
                <h1>Alan Parra</h1>
                <p>Software Engineer & Web Developer</p>
            </Carrera>
            {
                isMobile ? (
                    <Collapsable>
                        <p>
                            ¡Hello World! I am Alan Parra. I am passionate about software development, Website and Mobile Apps.
                            I am a Front-end Developer I know how to work with tools such as Nodejs, Bootstrap, Semantic UI, React, VueX, Angular.
                        </p>
                    </Collapsable>

                ) :
                    <Descripcion>
                        <h2>About Me</h2>
                        <p>
                            ¡Hello World! I am Alan Parra. I am passionate about software development, Website and Mobile Apps.
                            I am a Front-end Developer I know how to work with tools such as Nodejs, Bootstrap, Semantic UI, React, VueX, Angular.
                        </p>
                    </Descripcion>
            }

        </DatosProfesionales>
    )
};

const Titulo = styled.h3`
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid gainsboro;
    margin-top: 10px;
    align-items: baseline;
    h2 { font-size: 1.5rem; }
    svg {
        margin-right: 13px;
        font-size: 16px;
    }
`;

const Collapsable = ({ children }) => {
    const [collapse, setCollapse] = useState(true);
    const onCollapse = () => setCollapse(!collapse);

    return (
        <article>
            <Titulo onClick={onCollapse}>
                <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronDown} />
                <h2>About me</h2>
            </Titulo>
            {collapse && <>{children}</>}
        </article>
    );
}