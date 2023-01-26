import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  DatosPersonales,
  Nombre,
  Profesion,
  DatosContacto,
  Contacto,
  Ubicacion
} from "./Personal.style";
import { useTranslation } from 'react-i18next';

export default function Personal() {
  const { t } = useTranslation("global");

  return (
    <>
      <DatosPersonales>
        <div>
          <Nombre>Alan Parra</Nombre>
          <Profesion>{t("personal.caree")}</Profesion>
        </div>
        <DatosContacto>
          <Contacto>
            <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
            <a href="tel:3317460383">3317460383</a>
          </Contacto>
          <Contacto>
            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
            <a href="mailto:dev.alanparra@gmail.com?subject=Hello world">dev.alanparra@gmail.com</a>
          </Contacto>
          <Ubicacion>
            <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;
            Guadalajara, Jalisco
          </Ubicacion>
        </DatosContacto>
      </DatosPersonales>
    </>
  );
};
