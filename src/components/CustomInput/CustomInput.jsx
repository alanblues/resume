import React from "react";
import { faCheckCircle, faTimesCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Label,
  GrupoInput,
  Input,
  IconoValidacion,
  LeyendaError,
  Mensaje, TesArea
} from "../../pages/Contact/Contact.style";

export default function CustomInput(props) {
  const {
    tipo,
    label,
    id,
    leyendaError,
    estado,
    cambiarEstado,
    expReg,
  } = props;

  const handleValidacion = () => {
    if (expReg) {
      const esValido = expReg.test(estado.campo.trim()) ? 'true' : 'false';
      cambiarEstado({ ...estado, valido: esValido });
    }
  };

  const handleChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  if (tipo === "textarea") {
    return (
      <Mensaje>
        <Label htmlFor="mensaje" valido={estado.valido}>{label}</Label>
        <TesArea
          className="form-control"
          id={id}
          value={estado.campo}
          onChange={handleChange}
          onKeyUp={handleValidacion}
          onBlur={handleValidacion}
          valido={estado.valido}
          rows="3"
          maxLength="160"
        ></TesArea>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
      </Mensaje>
    );
  }

  return (
    <div>
      <Label htmlFor={id} valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input
          type={tipo}
          id={id}
          value={estado.campo}
          onChange={handleChange}
          onKeyUp={handleValidacion}
          onBlur={handleValidacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
}
