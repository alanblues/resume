import React from 'react';
import { SectionAcercade, Imagen, Especialidades, Nombre } from './About.style';
import { useBreakpoints } from "../../hooks/useBreakpoints";

export default function Personal() {
    const { isMobile } = useBreakpoints();

    return (
        <SectionAcercade>
            <Imagen>
                <img src="./assets/img/yo.jpeg" alt="picture" />
            </Imagen>
            {isMobile && <Nombre>Alan Parra</Nombre>}
            <Especialidades>
                <span>Software Developer</span>
                <span>Front-end</span>
                <span>Mobile developer</span>
            </Especialidades>
        </SectionAcercade>
    )
};