import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";
import Datos from "../../utilities/datos";
import Interests from "../Interests/Interests";
import CollapsableWork from "../../components/CollapsableWork";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import {
  ExperienciaIntereses, Experiencia, DatosEmpresa, Puesto,
  Empresa, Lugar, Antiguedad, LugarFechaMobile, SeccionIntereses
} from './Experience.style';

export default function Experience() {
  const { isMobile } = useBreakpoints();
  const { t, i18n } = useTranslation("global");
  const language = i18n.language;

  return (
    <ExperienciaIntereses>
      <div className="row">
        <section className="col-md-8 mb-sm-15">
          <Section titulo={t("label.experience")} />

          {isMobile ?
            Datos.empleos.map(emp =>
              <CollapsableWork key={emp.id} titulo={
                <DatosEmpresa>
                  <Puesto>{language === 'en' ? emp.puesto : emp.puestoEs}</Puesto>
                  <Empresa>{emp.compania}</Empresa>
                </DatosEmpresa>
              }>
                <LugarFechaMobile>
                  <Lugar>{emp.lugar}</Lugar>
                  <Antiguedad>{language === 'en' ? emp.antiguedad : emp.antiguedadEs}</Antiguedad>
                </LugarFechaMobile>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: language === 'en' ? emp.descripcion : emp.descEs}}>
                </div>
              </CollapsableWork>
            ) :
            Datos.empleos.map(emp =>
              <Experiencia key={emp.id}>
                <DatosEmpresa>
                  <Puesto>{language === 'en' ? emp.puesto : emp.puestoEs}</Puesto>
                  <Empresa>{emp.compania}</Empresa>
                  <Lugar>{emp.lugar}</Lugar>
                </DatosEmpresa>
                <Antiguedad>{language === 'en' ? emp.antiguedad : emp.antiguedadEs}</Antiguedad>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: language === 'en' ? emp.descripcion : emp.descEs}}>
                </div>
              </Experiencia>
            )
          }
        </section>
        <SeccionIntereses className="col-md-4">
          <Interests />
        </SeccionIntereses>
      </div>
    </ExperienciaIntereses>
  );
}