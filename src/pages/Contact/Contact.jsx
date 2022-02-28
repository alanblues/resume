import React, { useEffect, useState } from "react";
import {
  Contacto,
  Formulario,
  Inputs,
  BotonEnviar,
} from "./Contact.style";
import Section from "../../components/Section/Section";
import CustomInput from "../../components/CustomInput/CustomInput";

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  mensaje: /^[a-zA-ZÀ-ÿ\s]{3,150}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

export default function Contact() {
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [mensaje, setMensaje] = useState({ campo: '', valido: null });

  useEffect(()=> {
    activarBoton();
  }, [nombre.valido, correo.valido, mensaje.valido]);

  const activarBoton = () => {
    if (nombre.valido === 'true' && correo.valido === 'true' && mensaje.valido === 'true') {
      return false;
    }
    return true;
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert('Working on...');
  }


  return (
    <Contacto>
      <Section text="Contact" />
      <Formulario action="" onSubmit={handleSubmit} autocomplete="off">
        <Inputs>
          <CustomInput
            tipo="text"
            label="Name"
            id="name"
            leyendaError="You should fill name field"
            estado={nombre}
            cambiarEstado={setNombre}
            expReg={expresiones.nombre}
          />
          <CustomInput
            tipo="email"
            label="Email"
            id="email"
            leyendaError="You should fill email field"
            estado={correo}
            cambiarEstado={setCorreo}
            expReg={expresiones.correo}
          />
        </Inputs>
        <CustomInput
          tipo="textarea"
          label="Message"
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
