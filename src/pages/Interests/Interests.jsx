import React from "react";
import { useTranslation } from "react-i18next";
import Collapsable from "../../components/Collapsable";
import { ListaHabilidades, Habilidad } from "./Interests.style";
import Datos from '.././../utilities/datos';

export default function Interests() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <Collapsable title={t("label.languages")}>
        <ListaHabilidades>
          <Habilidad>{t("idiom.spanish")}</Habilidad>
          <Habilidad>{t("idiom.english")} (85%)</Habilidad>
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title={t("label.skills")}>
        <ListaHabilidades envuelto>
          {<Presentador datos={Datos.habilidades} />}
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title={t("label.softskills")}>
        <ListaHabilidades envuelto>
          {<Presentador datos={Datos.softskills} />}
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title={t("label.courses")}>
        <ListaHabilidades>
          {<Presentador datos={Datos.cursos} />}
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title={t("label.hobbies")}>
        <ListaHabilidades>
        {<Presentador datos={Datos.pasatiempos} />}
        </ListaHabilidades>
      </Collapsable>
    </>
  );
}

const Presentador = datos => {
  const { i18n } = useTranslation("global");
  const language = i18n.language;

  return (
    datos.datos.map(hab => (
      <Habilidad key={hab.id}>
        {language === 'en' ? hab.nombre : !hab.nombreEs ? hab.nombre : hab.nombreEs}
      </Habilidad>
    ))
  );
} 
