import React, { useState } from 'react'


// export const useForm = <T extends Object>(formulario: T) => {
export const useForm = (formulario) => {
  const [state, setState] = useState(formulario);

  const cambiarEstado = (campo, valor) => {
    setState({
      ...state,
      [campo]: valor
    });
  }

  return {
    ...state,
    formulario: state,
    cambiarEstado
  }
}