import React from "react";
import { useTranslation } from "react-i18next";
import Collapsable from "../../components/Collapsable";
import { ListaHabilidades, Habilidad } from "./Interests.style";
import Datos from '.././../utilities/datos';

export default function Interests() {
  const { t, i18n } = useTranslation("global");
  const language = i18n.language;

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

      <Collapsable title={t("label.courses")}>
        <ListaHabilidades>
          {<Presentador datos={Datos.cursos} />}
        </ListaHabilidades>
      </Collapsable>

      <Collapsable title={t("label.hobbies")}>
        <ListaHabilidades>
          {
            Datos.pasatiempos.map(hob => (
              <Habilidad key={hob.id}>
                {language === 'en' ? hob.nombreEn : hob.nombreEs}
              </Habilidad>
            ))
          }
        </ListaHabilidades>
      </Collapsable>
    </>
  );
}

const Presentador = datos => (
  datos.datos.map(hab => (
    <Habilidad key={hab.id}>{hab.nombre}</Habilidad>)
  )
);
