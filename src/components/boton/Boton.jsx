import './boton.css';


const Boton = (props) =>{
    const NombreBoton = props.texto;
    return <button className='boton'>{NombreBoton}</button>
}
export default Boton