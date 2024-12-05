import React from 'react';
import './CampoTexto.css';
function CampoTexto(props) {
  console.log(props.titulo);
  const Etiqueta = props.titulo;
  const Placeholder = `${props.placeholder}...`;
  return (
    <div
    className='campo-texto'
    >
      <label>{Etiqueta}</label>
      <input
      placeholder={Placeholder}
      required
      />
    </div>
  )
}

export default CampoTexto