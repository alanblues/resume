import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Lenguajes, Lenguaje } from "./Idioms.style";

const Idioms = () => {
    const [lenguaje, setLenguaje] = useState("en");
    const {i18n} = useTranslation("global");

    const onChangeLanguage = (lang) => {
      setLenguaje(lang);
      i18n.changeLanguage(lang);
    }

    return (
        <Lenguajes>
          <Lenguaje lan={lenguaje === "es" } onClick={() => onChangeLanguage("es")}>
            Es
          </Lenguaje>
          <Lenguaje lan={lenguaje === "en" } onClick={() => onChangeLanguage("en")}>
            En
          </Lenguaje>
      </Lenguajes>
    )
}

export default Idioms;