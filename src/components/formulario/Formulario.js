import './Formulario.css';
import CampoTexto from '../campoTexto/CampoTexto';
import ListaOpciones from '../listaOpciones/ListaOpciones';
import Boton from '../boton/Boton';
const Formulario = () =>{
    const manejarEnvio = (event) =>{
        event.preventDefault();  //Evita que el formulario se envíe por defecto
        console.log('Formulario enviado');
        //Aquí iría la lógica para enviar el formulario al backend

    }

    return(
        <section
        className='formulario'
        >
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="ingrese su nombre" required={true}/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" required={true} />

            <CampoTexto titulo="Foto" placeholder="Ingrese Url de la foto" required={true}/>
            <ListaOpciones/>
<Boton texto="Crear"/>
        </form>  
        </section>
    )
}
export default Formulario