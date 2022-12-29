import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Lenguajes, Lenguaje } from "./Idioms.style";

const Idioms = () => {
    const [lenguaje, setLenguaje] = useState("en");
    const {i18n} = useTranslation("global");

    const onChangeEs = () => {
      setLenguaje("es");
      i18n.changeLanguage("es");
    }

    const onChangeEn = () => {
      setLenguaje("en");
      i18n.changeLanguage("en");
    }

    return (
        <Lenguajes>
          <Lenguaje lan={lenguaje === "es" ? true : false } onClick={onChangeEs}>
            Es
          </Lenguaje>
          <Lenguaje lan={lenguaje === "en" ? true : false } onClick={onChangeEn}>
            En
          </Lenguaje>
      </Lenguajes>
    )
}

export default Idioms;