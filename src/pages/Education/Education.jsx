import React from "react";
import { useTranslation } from 'react-i18next';
import Section from "../../components/Section/Section";
import {
  Educacion,
  GrupoTitulo,
  Titulo,
  Carrera,
  Universidad,
  Periodo,
} from "./Education.style";

export default function Education() {
  const { t } = useTranslation("global");
  // console.log(i18n.language);

  return (
    <Educacion>
      <Section titulo={t("label.education")} />
      <GrupoTitulo>
        <Titulo>
          <Carrera>{t("education.ing")}&nbsp;</Carrera>
          <Universidad>Universidad Tecnológica del Sur de Sonora</Universidad>
        </Titulo>
        <Periodo>{t("education.ing_period")}</Periodo>
      </GrupoTitulo>

      <GrupoTitulo mt="1rem">
        <Titulo>
          <Carrera>{t("education.tsu")}&nbsp;</Carrera>
          <Universidad>Universidad Tecnológica del Sur de Sonora</Universidad>
        </Titulo>
        <Periodo>{t("education.tsu_period")}</Periodo>
        
      </GrupoTitulo>
    </Educacion>
  );
}
