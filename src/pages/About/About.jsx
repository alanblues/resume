import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DatosProfesionales, Fotografia, Descripcion, AcercaMi, Carrera } from './About.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useBreakpoints } from "../../hooks/useBreakpoints";

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

export default function Personal() {
    const { isMobile } = useBreakpoints();
    const { t } = useTranslation("global");
    const [para] = useState("<p style='color: red'>hola mundo</p><p>hola mundo dos</p>");
    return (
        <DatosProfesionales>
            <Fotografia src={"./assets/img/yo.jpeg"} alt="Fotografia" />
            <Carrera>
                <h1>Alan Parra</h1>
                <p>{t("personal.caree")}</p>
            </Carrera>
            {
                !isMobile ? (
                    <Descripcion>
                        <h2>{t("personal.about_title")}</h2>
                        <article dangerouslySetInnerHTML={{__html: t("personal.about_text")}}></article>
                    </Descripcion>
                ) :
                    <Collapsable>
                        <AcercaMi
                            dangerouslySetInnerHTML={{__html: t("personal.about_text")}}>
                        </AcercaMi>
                    </Collapsable>
            }
        </DatosProfesionales>
    )
};

const Collapsable = ({ children }) => {
    const [collapse, setCollapse] = useState(true);
    const onCollapse = () => setCollapse(!collapse);
    const { t } = useTranslation("global");

    return (
        <article>
            <Titulo onClick={onCollapse}>
                <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronDown} />
                <h2>{t("personal.about_title")}</h2>
            </Titulo>
            <>
                {children}
            </>
        </article>
    );
}