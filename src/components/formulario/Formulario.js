import './Formulario.css';
import CampoTexto from '../campoTexto/CampoTexto';
import ListaOpciones from '../listaOpciones/ListaOpciones';
const Formulario = () =>{

    return(
        <section
        className='formulario'
        >
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="ingrese su nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" />

            <CampoTexto titulo="Foto" placeholder="Ingrese Url de la foto"/>
            <ListaOpciones/>

        </form>  
        </section>
    )
}
export default Formulario