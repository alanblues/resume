import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DatosProfesionales, Fotografia, Descripcion, AcercaMi, Carrera } from './About.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { colores } from '../../scss/colores';

export default function Personal() {
    const { isMobile } = useBreakpoints();
    const { t } = useTranslation("global");

    return (
        <DatosProfesionales>
            <Fotografia src={"./assets/img/yo.jpeg"} alt="Fotografia" />
            <Carrera>
                <h1>Alan Parra</h1>
                <h5>{t("personal.caree")}</h5>
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

const Titulo = styled.div`
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid gainsboro;
    margin: 10px 0 12px;
    align-items: baseline;
    color: ${colores.principal};
    h2 {
        font-size: 23px;
    }
    svg {
        margin-right: 13px;
        font-size: 16px;
    }
`;

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
            {collapse && <>{children}</>}
        </article>
    );
}