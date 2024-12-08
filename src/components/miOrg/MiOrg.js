import './miOrg.css';
import { useState } from 'react';
const MiOrg = () =>{
    //estados manejados por los hooks
    //const [nombreVariable, funciaActualiza]=useState(valorInicial)
    const [mostrar, actualizarMostrar]= useState(true);
    
    const manejarClick= () =>{
     
        actualizarMostrar(!mostrar)
    }
    return <section className="orgSection">
        <h3 className='title' >Mi Organización</h3>
        <img onClick={manejarClick} src="img/boton-formulario.png" alt="Icono mi Org" />
         </section>
}

export default MiOrg;