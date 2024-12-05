import React from 'react'
import './listaOpciones.css'
function ListaOpciones() {
    //metodo map arreglo.map( (Equipos, index(posicion))=>{
    //  return <option></option>  
    //} )
    const Equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión"
    ]
  return (
    <div
    className='lista-opciones'
    >
        <label>Equipos</label>
        <select>
            { Equipos.map((Equipos, index) => {
                return <option key={index}>{Equipos}</option>
            }) }
  
          
        </select>
    </div>
  )
}

export default ListaOpciones