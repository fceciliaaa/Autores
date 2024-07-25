import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const FormAutor = ({ agregarNuevoAListaDeAutor }) => {

  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const navegacion = useNavigate();

  const agregarAutor = async (e) => {
    e.preventDefault();
    try {
      const nuevoAutor = { nombre };
      const url = 'http://localhost:8080/nuevo/autor'

      const respuesta = await axios.post(url, nuevoAutor);
      agregarNuevoAListaDeAutor(respuesta.data);

      setNombre("");
      setError("");
      navegacion('/')

    } catch (error) {
      console.log('Algo salio mal', error)
      setError(error.response.statusText);
    }
  }

  return (
    <>
      <Link to='/'> Home </Link>
      <h3>Añadir nuevo autor</h3>

      <form onSubmit={agregarAutor}>
        <div>
          <label htmlFor="nombre"> Nombre del autor: </label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <button type="button" onClick={() => navegacion(`/`)}>Cancelar</button>
        <button type="submit">Agregar</button>
        <p>{error}</p>
      </form>
    </>
  )

}

export default FormAutor;