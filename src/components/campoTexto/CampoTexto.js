import React from 'react';
import './CampoTexto.css';
function CampoTexto() {
  return (
    <div
    className='campo-texto'
    >
      <label>Nombre</label>
      <input
      placeholder='Ingresar Nombre'
      required
      />
    </div>
  )
}

export default CampoTexto