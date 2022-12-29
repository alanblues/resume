import React, { useEffect, useState } from "react";
import {
  Contacto,
  Formulario,
  Inputs,
  BotonEnviar,
} from "./Contact.style";
import Section from "../../components/Section/Section";
import CustomInput from "../../components/CustomInput/CustomInput";
import { expresiones } from "../../utilities/expresiones";

export default function Contact() {
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [mensaje, setMensaje] = useState({ campo: '', valido: null });

  useEffect(() => {
    activarBoton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombre.valido, correo.valido, mensaje.valido]);

  const activarBoton = () => {
    if (nombre.valido === 'true' && correo.valido === 'true' && mensaje.valido === 'true') {
      return false;
    }
    return true;
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <Contacto>
      <Section text="Contact" />
      <Formulario action="" onSubmit={handleSubmit} autocomplete="off">
        <Inputs>
          <CustomInput
            tipo="text"
            label="Name:"
            id="name"
            leyendaError="You should fill name field"
            estado={nombre}
            cambiarEstado={setNombre}
            expReg={expresiones.nombre}
          />
          <CustomInput
            tipo="email"
            label="Email:"
            id="email"
            leyendaError="You should fill email field"
            estado={correo}
            cambiarEstado={setCorreo}
            expReg={expresiones.correo}
          />
        </Inputs>
        <CustomInput
          tipo="textarea"
          label="Message:"
          id="message"
          leyendaError="You should fill message field"
          estado={mensaje}
          cambiarEstado={setMensaje}
          expReg={expresiones.mensaje}
        />
        <BotonEnviar type="submit" disabled={activarBoton()} className="btn">
          Enviar
        </BotonEnviar>
      </Formulario>
    </Contacto>
  );
}
